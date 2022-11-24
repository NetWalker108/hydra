const protocol = window.location.protocol == "https:" ? "wss:" : "ws:";
const client = new WebSocket(protocol + "//" + "13.38.189.209");
import { paintPixel } from "./paint.js";

const metadataLabel = 14;
const query = (window.location.search || "?")
  .substr(1)
  .split('&')
  .filter(x => x != '')
  .map(x => x.split('='))
const delay = Number((query.filter(([k, v]) => k == 'delay')[0] || [])[1] || 0);

let n = 0;
let knownUtxo = {};

client.addEventListener("message", e => {
  const msg = JSON.parse(e.data);
  switch (msg.tag) {
    case "GetUTxOResponse":
      knownUtxo = msg.utxo;
      console.log("New utxo", knownUtxo);
      break;
    case "TxSeen":
      console.log("New transaction seen", msg.transaction.id);
      if (msg.transaction.auxiliaryData != null) {
        console.log("Transaction has auxiliary data", msg.transaction.auxiliaryData);
        const aux = cbor.decodeFirstSync(msg.transaction.auxiliaryData).value;
        const [x, y, r, g, b] = (aux.get(0) || aux.get(1)).get(metadataLabel);
        n += delay;
        setTimeout(() => drawPixel(x, y, [r, g, b]), n);
      }
    default:
      console.log("Irrelevant message", msg);
  }
});

// Canvas

const CANVAS_SIZE = 32;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const canvasScale = {
  x: canvas.width / CANVAS_SIZE,
  y: canvas.height / CANVAS_SIZE,
}
ctx.scale(canvasScale.x, canvasScale.y);
console.log("canvasScale", canvasScale);

const drawPixel = (x, y, rgb) => {
  const [r, g, b] = rgb;
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(x, y, 1, 1);
}


canvas.addEventListener('click', function (e) {
  console.log("event", e);
  const canvasPosition = {
    x: canvas.offsetLeft,
    y: canvas.offsetTop
  };
  console.log("canvasPosition", canvasPosition);
  const clickedPixel = {
    x: (e.pageX - canvasPosition.x) / canvasScale.x,
    y: (e.pageY - canvasPosition.y) / canvasScale.y
  };
  console.log("clickedPixel", clickedPixel);

  const x = Math.floor(clickedPixel.x);
  const y = Math.floor(clickedPixel.y);

  paintPixel(client, x, y, currentColor)
    .then(() => console.log("Ok"))
    .catch(e => console.log("Error", e));
});

// Color picker

let currentColor = [255, 0, 0];
const currentColorElement = document.querySelector('#current-color');
const picker = new Picker(currentColorElement);

currentColorElement.style.background = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

picker.onDone = function (color) {
  console.log("Color picked:", color);
  currentColor = color.rgba;
  currentColorElement.style.background = color.rgbaString;
};
