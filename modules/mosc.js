const osc = require('osc')

const OSC_PORT_IN = 1234
var udpPort = new osc.UDPPort({
  localAddress: '0.0.0.0',
  localPort: 57121,
  metadata: true
})
udpPort.open()

udpPort.on('ready', function () {
  console.log('OSC ON at port', OSC_PORT_IN)
})

const send = p => {
  udpPort.send({
    address: '/push',
    args: [
      {
        type: 's',
        value: p.deviceId
      },
      {
        type: 'i',
        value: p.heartRate
      }
    ]
  }, '127.0.0.1', OSC_PORT_IN)
}

module.exports = { send }
