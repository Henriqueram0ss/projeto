document.getElementById("filtro").addEventListener("input", function () {
    const valor = this.value.toLowerCase();
    const linhas = document.querySelectorAll("#lista-alunos .linha");

    linhas.forEach(linha => {
      const nome = linha.querySelector(".nome").textContent.toLowerCase();
      linha.style.display = nome.includes(valor) ? "flex" : "none";
    });
  });


  function verDetalhes(botao) {
    const linha = botao.closest(".linha");
    const nome = linha.children[0].textContent;
    const turma = linha.children[1].textContent;
    const matricula = linha.children[2].textContent;

    const url = `detalhes.html?nome=${encodeURIComponent(nome)}&turma=${encodeURIComponent(turma)}&matricula=${encodeURIComponent(matricula)}`;
    window.location.href = url;
  }