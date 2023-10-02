let kezdy = randint(0, 4)
let kezdx = randint(0, 2)
let lista = [
kezdy,
kezdx,
kezdx + 1,
kezdx + 2
]
for (let index = 0; index < 3; index++) {
    led.plot(kezdx, kezdy)
    kezdx += 1
}
basic.forever(function () {
	
})
