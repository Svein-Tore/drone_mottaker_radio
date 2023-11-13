radio.onReceivedString(function (receivedString) {
    motatte_tegn = receivedString
})
let yaw = 0
let throttle = 0
let roll = 0
let pitch = 0
let motatte_tegn = ""
radio.setGroup(1)
radio.setTransmitPower(7)
motatte_tegn = "P0R0T0Y0"
serial.redirect(
SerialPin.P1,
SerialPin.P2,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.clearScreen()
    pitch = AirBit.getNumber("P", motatte_tegn)
    roll = AirBit.getNumber("R", motatte_tegn)
    throttle = AirBit.getNumber("T", motatte_tegn)
    yaw = AirBit.getNumber("Y", motatte_tegn)
    led.plot(Math.map(roll, -90, 90, 0, 5), Math.map(pitch, -90, 90, 5, 0))
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(2, 0)
    led.plot(4, 4)
    AirBit.FlightControl(
    throttle,
    yaw,
    pitch,
    roll,
    0,
    1,
    0
    )
})
