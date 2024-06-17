basic.forever(function () {
    if (input.temperature() < 25) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            # . # . #
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    if (input.temperature() > 25) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # . .
            . # # . .
            . # # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
})
