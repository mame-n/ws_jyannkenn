let goochokipaa = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playMelody("- - F - F - C5 C5 ", 207)
    goochokipaa = randint(0, 2)
    if (goochokipaa == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # # # # #
            . # # # .
            `)
    } else {
        if (goochokipaa == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                `)
        }
    }
})
basic.forever(function () {
	
})
