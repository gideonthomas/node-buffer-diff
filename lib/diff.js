function* checksum(chunkSize, buffer) {
  const bufferLength = buffer.length;
  const chunkNumber = 0;
  const chunkStartPos = 0;
  const chunkEndPos = Math.min(chunkSize, bufferLength);

  while(chunkStartPos < bufferLength) {
    const chunk = buffer.slice(chunkStartPos, chunkEndPos);
    const checksum = {
      chunkNumber,
      checksum32: hash32(chunk).value,
      checksumMD5: hashMD5(chunk)
    };

    yield checksum;

    chunkStartPos += chunkSize;
    chunkEndPos = Math.min(chunkEndPos + chunkSize, bufferLength);
    chunkNumber++;
  }
}

function diff(Buffer, chunkSize, buffer1, buffer2) {
  const buffer1Checksums = [...checksum(chunkSize, buffer1)];
}

module.exports = diff;
