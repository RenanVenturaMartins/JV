function calcular(){
    var cal = document.getElementById('calcular')
    var one = document.getElementsByName ('formula')
    var numerico1 = document.getElementById ('n1')
    var numerico2 = document.getElementById ('n2')
    var numerico3 = '' 
    var resultado = document.getElementById ('res')
   
    if (formula[0].checked) {
         var numerico3 = 'numerico1' + 'numerico2'
    } else if(formula[1].checked) {
         var numerico3 =  'numerico1' - 'numerico2'

    } else if(formula[2].checked) {
         var numerico3= 'numerico1' * 'numerico2'
    
    } else if(formula[3].checked) {
         var numerico3=  'numerico1' / 'numerico2'
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML =  `a conta entre ${numerico1} e ${numerico2} deu = ${numerico3} o valor total`}