function sideBar() {
  var itens = document.getElementById("itens");

  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}

function pesquisar(coluna) {
  let input = document.getElementById("search").value;

  input = input.toLowerCase();

  let tabela = document.getElementById("tabela");

  if (input.length > 0) {
    tabela.style.display = "block";

    let linhas = Array.from(tabela.rows);

    let filtradas = linhas.filter((linha) => {
      let texto = linha.cells[coluna].innerHTML.toLowerCase();

      let partes = texto.split("/");

      let ano = partes[-1];

      return ano == input;
    });

    linhas.forEach((linha) => (linha.style.display = "none"));

    filtradas.forEach((linha) => (linha.style.display = "block"));
  } else {
    tabela.style.display = "none";
  }
}
