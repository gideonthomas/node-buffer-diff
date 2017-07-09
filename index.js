const Buffer = require("buffer");

const diff = require("./lib/diff");

const HALF_KB = 512;

class BufferDiff {
  constructor(BufferImpl = Buffer, chunkSize = HALF_KB) {
    this.BufferImpl = BufferImpl;
    this.chunkSize = chunkSize;
  }

  generate(buffer1, buffer2) {
    return diff(this.BufferImpl, this.chunkSize, buffer1, buffer2);
  }
}

module.exports = BufferDiff;
