let kezdy = randint(0, 4)
let kezx = randint(0, 2)
led.plot(kezx, kezdy)
for (let index = 0; index < 2; index++) {
    kezx += 1
    led.plot(kezx + 0, kezdy)
}
basic.forever(function () {
	
})
