let reading1 = 0
let reading2 = 0
basic.forever(function () {
    reading1 = pins.digitalReadPin(DigitalPin.P0)
    reading2 = pins.digitalReadPin(DigitalPin.P1)
    if (reading1 == 1) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
    }
    if (reading2 == 1) {
        basic.showIcon(IconNames.Confused)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
    }
})
