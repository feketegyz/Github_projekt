let kezdy = randint(0, 4)
let kezdx = randint(0, 2)
led.plot(kezdx, kezdy)
for (let index = 0; index < 2; index++) {
    kezdx += 1
    led.plot(kezdx + 0, kezdy)
}
basic.forever(function () {
	
})
