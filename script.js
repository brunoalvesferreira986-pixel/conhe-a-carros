// Lista de carros
const carros = [
  {
    marca: "Chevrolet",
    modelo: "Opala",
    ano: "1968–1992",
    combustivel: "Gasolina/Álcool",
    pais_origem: "Brasil"
  },
  {
    marca: "Volkswagen",
    modelo: "Fusca",
    ano: "1938–2003",
    combustivel: "Gasolina",
    pais_origem: "Alemanha"
  },
  {
    marca: "Chevrolet",
    modelo: "Chevette",
    ano: "1973–1993",
    combustivel: "Gasolina/Álcool",
    pais_origem: "Brasil"
  }
];

// Função que monta a lista de carros com base no filtro de busca
function mostrarLista(filtro = "") {
  const ul = document.getElementById("lista-de-carros");
  ul.innerHTML = ""; // Limpa a lista antes de adicionar novamente

  carros.forEach(carro => {
    if (carro.modelo.toLowerCase().includes(filtro.toLowerCase())) {
      const li = document.createElement("li");
      li.textContent = carro.modelo;

      // Quando clicar no carro, mostra os detalhes
      li.addEventListener("click", () => mostrarDetalhes(carro));

      ul.appendChild(li);
    }
  });
}

// Função para mostrar os detalhes de um carro
function mostrarDetalhes(carro) {
  const div = document.getElementById("detalhes-do-carro");
  div.innerHTML = `
    <h3>${carro.modelo}</h3>
    <p><strong>Marca:</strong> ${carro.marca}</p>
    <p><strong>Ano:</strong> ${carro.ano}</p>
    <p><strong>Combustível:</strong> ${carro.combustivel}</p>
    <p><strong>País de origem:</strong> ${carro.pais_origem}</p>
  `;
}

// Escuta o campo de busca
document.getElementById("busca").addEventListener("input", function () {
  const termo = this.value;
  mostrarLista(termo);
});

// Exibe a lista completa ao iniciar
mostrarLista();
