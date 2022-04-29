function calcular() {
   
   var numerico1 = document.getElementById('n1');
   var numerico2 = document.getElementById('n2');
   var operador = document.getElementById('operador');
   var resultado = document.getElementById('res');
   var resu = resultado  

   console.log(numerico1.type);
   console.log(numerico1.value);

  

   if (operador.value == "soma") {
      resultado = numerico1.value + numerico2.value;

   } else if (operador.value == "subtracao") {
      resultado = numerico1-numerico2;

   } else if (operador.value == "multiplicacao") {
      resultado = numerico1*numerico2;

   } else if (operador.value == "divisao") {
      resultado = numerico1 / numerico2;      
   };

   resu.innerHTML = `a ${operador.value} entre ${numerico1.value} e ${numerico2.value} = ${resultado}`;
   
}