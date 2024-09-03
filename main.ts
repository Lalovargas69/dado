let Número_dado = 0
input.onGesture(Gesture.Shake, function () {
    Número_dado += randint(1, 6)
    basic.showNumber(Número_dado)
})
