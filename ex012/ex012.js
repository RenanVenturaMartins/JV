var atual = new Date()
var horas = atual.getHours()
console.log (`São ${horas} horas`)

if (horas < 12){
    console.log('Bom diaaa')
} else if (horas < 18){
    console.log('Boa tardee')
} else if (horas <24) {
    console.log('Boa noitee')
}
