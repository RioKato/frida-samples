const read = DebugSymbol.fromName('read')

Interceptor.attach(read.address, {
  onEnter() {
    const data = this.context.rsi.readByteArray(this.context.rdx.toInt32())
    // const buffer = new Uint8Array(data)
    // console.log(buffer[0])
    console.log(data)
  },
  onLeave() {
    console.log("read end")
  },
});

