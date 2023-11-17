var  var1 = 10
let = 5;
const const1 = 15;

var1 = var1.toString(); //Transformando var para string.

document.getElementById('js').innerText = "Var= " + var1 + "Let= " + let1 + "Const= " + const1;

document.getElementById('js').innerText += "\n" +
 "\n Tipos de Variáveis" +
 "\n Var1= " + typeof(var1) + 
 "\n Let1= " + typeof(let1) + 
 "\n Const1= " + typeof(const1);

 const js = document.getElementById('js');

 js.innerHTML += "<hr>"

 //Operadores Relacionais
 js.innerHTML += "var= " + var1 + "let= " + let1 +
 "<br> var1 == let1 = " + (var1 == let1) + 
 "<br> var1 != let1 = " + (var1 != let1) + 
 "<br> var1 > let1 = " + (var1 > let1) + 
 "<br> var1 < let1 = " + (var1 < let1) + 
 "<br> var1 >= let1 = " + (var1 >= let1) + 
 "<br> var1 <= let1 = " + (var1 <= let1);


//Operadores Logicos 


js.innerHTML += "<hr> var = 15, let1 = 5 e const1 = 15" + 
"<br> var1 = let1 & var1 = const1 = " + (var1 == let1 && var1 == const1) +
"<br> var1 = let1 ou  var1 = const1 = " + (var1 == let1 || var1 == const1) +
"<br> var1 = let1 &  var1 = const1 = " + (var1 === let1 || var1 === const1); //Compara o tipo da variavel com 3=

//Estrutura de Decisão

if(var1 === const1){
    js.innerHTML += "<h1> Var1 é exatamente igual const1 </h1>"
}else{
    js.innerHTML += "<h1> Var1 <b>Não</b> é exatamente igual const1 </h1>"
}

js.innerHTML += "<hr>";

js.innerHTML += (++var1 == --var2)? "<h2> São iguais </h2>": "<h2> Não são iguais</h2>";

js.innerHTML += "<hr>"

const semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

switch(semana[0]){
    case"segunda":
    js.innerHTML += "<h3> Hoje é segunda";
    break;
}