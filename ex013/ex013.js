var dia = new Date()
var hora = new Date ()
var minuto = new Date
var diaSem = dia.getDay()
var horas = hora.getHours()
var minutos = minuto.getMinutes()
console.log (`Agora são ${horas} horas e ${minutos}  minutos`)
 switch(diaSem) {
        case 0:
            console.log(' Em plena(o) Domingo')
            break
        case 1:
            console.log(' Em plena(o) Segunda')
            break
        case 2:
            console.log(' Em plena(o) Terça')
            break
        case 3:
            console.log(' Em plena(o) Quarta')
            break
        case 4:
            console.log(' Em plena(o) Quinta')
            break
        case 5:
            console.log(' Em plena(o) Sexta')
            break
        case 6:
        console.log(' Em plena(o) Sabado')
        break
        default:
            console.log('[ERRO] dia invalido')
            break
    }