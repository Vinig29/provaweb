const saida =  document.getElementById('saida');

var vetorTextos = ["Maça", "Banana", "Laranja", "Morango"];

saida.innerText += "\n"
//for(i = 0; i < vetorTextos.lenght; i++)
for(i in vetorTextos){
    saida.innerText  += "\n chave = " + i + " valor = " + vetorTextos[i];
}

saida.innerText += "\n"
for(vetor of vetorTextos){
    saida.innerText  += "\n valor = " + vetor;
}

saida.innerText += "\n"
vetorTextos.push("Melancia");
saida.innerText += "\n Adicionando ao vetor: " + vetorTextos;

saida.innerText += "\n"
vetorTextos.pop();
saida.innerText += "\n removendo ultimo item: " + vetorTextos;

saida.innerText += "\n"
vetorTextos.unshift("Melancia");
saida.innerText += "\n Adicionando ao inicio do vetor: " + vetorTextos;

saida.innerText += "\n"
vetorTextos.shift();
saida.innerText += "\n Removendo no incio do vetor: " + vetorTextos;

var novoVetor = vetorTextos.slice(1,3);
saida.innerText += "\n \n Novo vetor: " + novoVetor;

vetorTextos.splice(2, 0, "Melancia");
saida.innerText += "\n\n Vetor com Melancia: " + vetorTextos

// vetorTextos.splice(2, 2, "Melancia");
// saida.innerText += "\n\n Vetor com Melancia: " + vetorTextos

var chave = vetorTextos.indexOf("Laranja");
saida.innerText += "\n\n Index do vetor: " + chave;

saida.innerText += "\n"
vetorTextos.forEach((fruta, key) =>{
    saida.innerText += "\n Chave =  " + key + " Fruta = " + fruta
})