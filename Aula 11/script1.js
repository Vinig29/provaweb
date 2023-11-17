var var1 = 10;
let let1 = 5;
const const1 = 15;

var1 = var1.toString(); // Transformando var1 para string.

document.getElementById('js').innerText = "Var= " + var1 + "Let= " + let1 + "Const= " + const1;
// Define o conteúdo de texto dentro do elemento com o ID 'js'.

document.getElementById('js').innerText += "\n" +
    "\n Tipos de Variáveis" +
    "\n Var1= " + typeof(var1) +
    "\n Let1= " + typeof(let1) +
    "\n Const1= " + typeof(const1);

const js = document.getElementById('js');

js.innerHTML += "<hr>";
// Adiciona uma linha horizontal no elemento.

// Operadores Relacionais
js.innerHTML += "var= " + var1 + "let= " + let1 +
    "<br> var1 == let1 = " + (var1 == let1) +
    // Realiza comparações usando operadores relacionais.
    // ...

// Operadores Lógicos
js.innerHTML += "<hr> var = 15, let1 = 5 e const1 = 15" +
    "<br> var1 = let1 & var1 = const1 = " + (var1 == let1 && var1 == const1) +
    "<br> var1 = let1 ou var1 = const1 = " + (var1 == let1 || var1 == const1) +
    // Realiza operações lógicas de comparação.
    // ...

// Estrutura de Decisão
if (var1 === const1) {
    js.innerHTML += "<h1> Var1 é exatamente igual const1 </h1>";
} else {
    js.innerHTML += "<h1> Var1 <b>Não</b> é exatamente igual const1 </h1>";
}
// Executa uma declaração condicional baseada na comparação de variáveis.

js.innerHTML += "<hr>";

js.innerHTML += (++var1 == --var2) ? "<h2> São iguais </h2>" : "<h2> Não são iguais</h2>";
// Incrementa var1 e compara se é igual a var2.

js.innerHTML += "<hr>";

const semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

switch (semana[0]) {
    case "segunda":
        js.innerHTML += "<h3> Hoje é segunda";
        break;
}
// Utiliza uma estrutura switch para verificar o dia da semana.
