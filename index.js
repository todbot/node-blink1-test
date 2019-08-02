
// simple test of node-blink1
// @todbot

var Blink1 = require('node-blink1');
var blink1 = new Blink1();

blink1.setLedN(0);
blink1.writePatternLine(10, 255, 0, 0, 0);
blink1.writePatternLine(180, 255, 0, 0, 1);
blink1.writePatternLine(10, 0, 0, 0, 2);
blink1.writePatternLine(180, 0, 0, 0, 3);
blink1.playLoop(0, 3, 0);

blink1.close();
