kezdy = randint(0, 4)
kezdx = randint(0, 2)
led.plot(kezdx, kezdy)
for index in range(2):
    kezdx += 1
    led.plot(kezdx + 0, kezdy)

def on_forever():
    pass
basic.forever(on_forever)
