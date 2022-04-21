

function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`;

    if (  hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#FEE185'
        

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#3C1605' 

    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#362946'

    }
}
