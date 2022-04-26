function verificar() {
    var stat = document.getElementById('#inicio') ;
    var end = document.getElementById('#fim') ;
    var pas = document.getElementById('#passos') ;
    var resultado = document.getElementById('#res') ;
    
    while (stat <= end) {
        console.log('passei')
        pas++
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = 'ola'
}