function doeIets (sprite: game.LedSprite) {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
        if (0 == 0 && input.pinIsPressed(TouchPin.P0)) {
            break;
        }
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.No)
}
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.setDisplayMode(DisplayMode.Greyscale)
})
