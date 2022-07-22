radio.onReceivedString(function (receivedString) {
    controller = receivedString
})
let controller = ""
let turn_speed = 0
radio.setGroup(1)
let max_speed = 110
let min_speed = 70
let distance = 0
basic.forever(function () {
    distance = Math.round(sonar.ping(
    DigitalPin.P8,
    DigitalPin.P9,
    PingUnit.Centimeters
    ))
    if (distance > 10) {
        if (controller == "stop") {
            pins.servoWritePin(AnalogPin.P0, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
        } else if (controller == "forward") {
            pins.servoWritePin(AnalogPin.P0, max_speed)
            pins.servoWritePin(AnalogPin.P2, min_speed)
        } else if (controller == "back") {
            pins.servoWritePin(AnalogPin.P0, min_speed)
            pins.servoWritePin(AnalogPin.P2, max_speed)
        } else if (controller == "right") {
            pins.servoWritePin(AnalogPin.P0, max_speed)
            pins.servoWritePin(AnalogPin.P2, max_speed)
        } else if (controller == "left") {
            pins.servoWritePin(AnalogPin.P0, min_speed)
            pins.servoWritePin(AnalogPin.P2, min_speed)
        } else {
            pins.servoWritePin(AnalogPin.P0, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
        }
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
basic.forever(function () {
    basic.showString(controller)
})
