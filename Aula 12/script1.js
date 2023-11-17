const saida = document.getElementById('saida'); // Captura o elemento com o ID 'saida'

var vetorTextos = ["Maça", "Banana", "Laranja", "Morango"]; // Declara um array de frutas

// Itera sobre o array 'vetorTextos' usando o loop 'for...in' e exibe índice e valor de cada elemento
for (i in vetorTextos) {
    saida.innerText += "\n chave = " + i + " valor = " + vetorTextos[i];
}

// Itera sobre o array 'vetorTextos' usando um loop 'for...of' e exibe apenas o valor de cada elemento
for (vetor of vetorTextos) {
    saida.innerText += "\n valor = " + vetor;
}

// Adiciona um novo elemento ("Melancia") ao final do vetor
vetorTextos.push("Melancia");

// Remove o último elemento do vetor
vetorTextos.pop();

// Adiciona um novo elemento ("Melancia") no início do vetor
vetorTextos.unshift("Melancia");

// Remove o primeiro elemento do vetor
vetorTextos.shift();

// Cria um novo vetor contendo elementos do índice 1 ao 2 (sem incluir o índice 3)
var novoVetor = vetorTextos.slice(1, 3);

// Insere um novo elemento ("Melancia") na posição 2 do vetor
vetorTextos.splice(2, 0, "Melancia");

// Encontra o índice da string "Laranja" no vetor
var chave = vetorTextos.indexOf("Laranja");

// Itera sobre o vetor usando forEach, exibindo chave e valor de cada elemento
vetorTextos.forEach((fruta, key) => {
    saida.innerText += "\n Chave =  " + key + " Fruta = " + fruta;
});
