// Classe Usuario
class Usuario {
  constructor(nome, email, idade) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
  }
}

// Criando os usuários
const usuarios = [
  new Usuario("Ana", "ana@ex.com", 25),
  new Usuario("Bruno", "bruno@ex.com", 24),
  new Usuario("Carla", "carla@ex.com", 25),
  new Usuario("Daniel", "daniel@ex.com", 30),
  new Usuario("Eduarda", "eduarda@ex.com", 28),
  new Usuario("Felipe", "felipe@ex.com", 32),
  new Usuario("Gabriela", "gabriela@ex.com", 26),
  new Usuario("Henrique", "henrique@ex.com", 24),
  new Usuario("Isabela", "isabela@ex.com", 29),
  new Usuario("João", "joao@ex.com", 27),
  new Usuario("Karla", "karla@ex.com", 31),
  new Usuario("Lucas", "lucas@ex.com", 25),
  new Usuario("Mariana", "mariana@ex.com", 26),
  new Usuario("Nicolas", "nicolas@ex.com", 30),
  new Usuario("Olivia", "olivia@ex.com", 28),
  new Usuario("Pedro", "pedro@ex.com", 23),
  new Usuario("Quintino", "quintino@ex.com", 33),
  new Usuario("Rafaela", "rafaela@ex.com", 27)
];

let currentPage = 1;
const registrosPorPagina = 5;

// Carrega os usuários na tabela de acordo com a página atual
function carregarTabela(pagina) {
  const corpoTabela = document.getElementById("corpoTabela");
  corpoTabela.innerHTML = "";

  let inicio = (pagina - 1) * registrosPorPagina;
  let fim = inicio + registrosPorPagina;
  let usuariosPagina = usuarios.slice(inicio, fim);

  usuariosPagina.forEach(usuario => {
    let row = corpoTabela.insertRow();

    let cellNome = row.insertCell(0);
    let cellEmail = row.insertCell(1);
    let cellIdade = row.insertCell(2);

    cellNome.textContent = usuario.nome;
    cellEmail.textContent = usuario.email;
    cellIdade.textContent = usuario.idade;
  });

  criarBotoesPaginacao();
}

// Cria os botões de paginação
function criarBotoesPaginacao() {
  const paginacao = document.getElementById("paginacao");
  paginacao.innerHTML = "";

  let totalPaginas = Math.ceil(usuarios.length / registrosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    let botao = document.createElement("button");
    botao.textContent = i;
    botao.onclick = function() {
      currentPage = i;
      carregarTabela(currentPage);
    };

    if (i === currentPage) {
      botao.style.fontWeight = "bold";
      botao.style.backgroundColor = "#ddd";
    }

    paginacao.appendChild(botao);
  }
}

// Busca com atualização da tabela filtrada
function buscarTabela() {
  let filtro = document.getElementById("busca").value.toUpperCase();
  let tabela = document.getElementById("dadosTabela");
  let linhas = Array.from(tabela.rows).slice(1); // Ignorar cabeçalho

  linhas.forEach(row => {
    let nome = row.cells[0].textContent.toUpperCase();
    let idade = row.cells[2].textContent.toUpperCase();

    if (nome.includes(filtro) || idade.includes(filtro)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Carrega a primeira página ao abrir a página
window.onload = () => carregarTabela(currentPage);

function ordenarUsuarios(arr) {
  return arr.slice().sort((a, b) => {
    if (a.idade !== b.idade) {
      return a.idade - b.idade; // Ordena por idade crescente
    } else {
      return a.nome.localeCompare(b.nome); // Ordena por nome alfabético se idades forem iguais
    }
  });
}

let numeros = [12, 3, 19, 7, 5, 1, 14, 17, 8, 15, 2, 18, 11, 20, 6, 9, 16, 10, 4, 13, 12, 12];

console.log("Array original:", numeros);

function bubbleSort(arr) {
  let sortedArr = arr.slice(); // cria uma cópia do vetor original
  let temp;

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
}

function bubbleSortDecrescente(arr) {
  let sortedArr = arr.slice(); // cria uma cópia do vetor original
  let temp;

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j] < sortedArr[j + 1]) {
        temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
}

function buscaLinear(arr, valor) {
  let indices = []; // array para armazenar os índices encontrados

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      indices.push(i); // adiciona o índice ao array
    }
  }
  if(indices.length > 0){
    console.log(`${indices.length} indices encontrados: ${indices}.`);
    return indices;
  } 
  else{
    console.log("Valor não encontrado.");
    return -1;
  }
}

function ordenarTabela() {
  let tabela = document.getElementById("dadosTabela");
  Array.from(tabela.rows)
    .sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))
    .forEach(tr => tabela.appendChild(tr));
}

let ordenado = bubbleSortDecrescente(numeros);
console.log("Array ordenado:", ordenado);

buscaLinear(numeros, 12);