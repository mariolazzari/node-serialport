// https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const path = "COM3";
const port = new SerialPort(path, { baudRate: 9600 });

const parser = new Readline();
port.pipe(parser);

parser.on("data", code => {
  const test = code;
  console.log("xxx");
  console.log("xxx", test);
});
