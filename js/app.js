let amigos = [];

// Função para atualizar a visualização da lista de amigos
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
      let amigo = document.createElement('span');
      amigo.textContent = amigos[i];
      listaAmigos.appendChild(amigo);
      if (i < amigos.length - 1) {
        let virgula = document.createElement('span');
        virgula.textContent = ', ';
        listaAmigos.appendChild(virgula);
      }
    }
  }

// Adiciona evento de clique aos elementos da lista de amigos
let listaAmigos = document.getElementById('lista-amigos');
listaAmigos.addEventListener('click', function(event) {
  if (event.target.tagName === 'SPAN') {
    let amigoSelecionado = event.target.textContent;
    removerAmigo(amigoSelecionado);
  }
});

// Função para remover um amigo da lista
function removerAmigo(amigo) {
    if (confirm(`Você deseja remover ${amigo} da lista de amigos?`)) {
      let indice = amigos.indexOf(amigo);
      if (indice !== -1) {
        amigos.splice(indice, 1);
        atualizarListaAmigos();
      }
    }
  }

// Função para adicionar um amigo à lista
function adicionar() {
  let amigo = document.getElementById('nome-amigo');
  let lista = document.getElementById('lista-amigos');
  if (amigo.value.trim() === '') {
    alert("Por favor, insira um nome!");
  } else if (amigos.includes(amigo.value)) {
    alert("Este nome já existe na lista!");
  } else {
    amigos.push(amigo.value);
    atualizarListaAmigos();
    amigo.value = '';
  }
}

function sortear() {
    if (amigos.length < 3) {
        alert("Você precisa ter pelo menos 3 amigos na lista para realizar o sorteio!");
    } else {
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');
        
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    if (confirm("Você deseja reiniciar a lista de amigos?")) {
      amigos = [];
      document.getElementById('lista-amigos').innerHTML = '';
      document.getElementById('lista-sorteio').innerHTML = '';
    }
  }
