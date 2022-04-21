function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('numero')
    var resultado = window.document.getElementById('res')
    if(fano.value.lenght ==0 || fano.value > ano) {
        alert(`Verifique os dados e tente novamente`)
    } else{
        var fsexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 12){
              img.setAttribute('src', 'imagens/crianca1.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/homem.jpg')
            } else if (idade >= 31) {
                img.setAttribute('src', 'imagens/idoso.jpg')

            }
        }else if (fsexo[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'imagens/crianca2.jpg')
            } else if (idade >= 12 && idade < 30) {
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else if (idade >= 31) {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `detectamos um(a) ${genero} com seus ${idade} anos de idade`
        resultado.appendChild(img)
        
    }
}