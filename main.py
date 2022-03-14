from machine import Timer, Pin, TouchPad

import network
import urequests as ureq
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
#wlan.connect('brisa-202387', '9n1s8seu') ### Rede de casa
wlan.connect('Planck', 'hcortado')        ### Rede do celular roteado

#https://github.com/nynonet/esp32/blob/master/main.py

def fala(val):
    req = ureq.patch('https://appex-ufca.firebaseio.com/sistemaSolar/sessao/00:11:22:33:44:55.json', json={"acao": val})
    req.close()     

LED = Pin(2, Pin.OUT)
#LED = Pin(16, Pin.OUT)
   	
pinos = ((14, "r1"), (13, "r2"), (12, "r3"))
def avisa(time):
    for p in pinos:
        t = TouchPad(Pin(p[0]))
        v = t.read() 
        if v < 300:
            LED.on()
            fala(p[1])
            LED.off()        

    
tim0 = Timer(0)
tim0.init(period=200, mode=Timer.PERIODIC, callback=avisa)



