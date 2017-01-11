"use strict";

const Emitter = require("events");
const five = require("johnny-five");

const Board = five.Board;

class Plugin extends Emitter {
  constructor(options) {
    super();

    Board.Component.call(
      this, options = Board.Options(options)
    );

    this.io.pinMode(this.pin, this.io.MODES.ANALOG);
    this.io.analogRead(this.pin, tenBitData => this.emit("data", tenBitData));
  }
}

module.exports = Plugin;
