const alunos = [
    { nome: "Walaci", turma: "3A", matricula: "202501" },
    { nome: "Jonathan", turma: "3A", matricula: "202501" },
    { nome: "Gustavo", turma: "3A", matricula: "202501" },
    { nome: "Henrique", turma: "3A", matricula: "202501" }
  ];

  function mostrarAlunos() {
    const container = document.getElementById("info");
    container.innerHTML = "<h3>Lista de Alunos:</h3>" + alunos.map(aluno => `
      <div class="aluno">
        <strong>Nome:</strong> ${aluno.nome}<br>
        <strong>Turma:</strong> ${aluno.turma}<br>
        <strong>Matrícula:</strong> ${aluno.matricula}
      </div>
    `).join('');
  }

  function mostrarRelatorios() {
    const container = document.getElementById("info");
    container.innerHTML = "<h3>Relatórios dos Alunos:</h3>" + alunos.map(aluno => `
      <div class="relatorio">
        <strong>Aluno:</strong> ${aluno.nome}<br>
        <strong>Notas:</strong> Nota 1: 8.0, Nota 2: 9.2, Nota 3: 7.5<br>
        <strong>Frequência:</strong> 95%<br>
        <strong>Observações:</strong> Participativo(a) e pontual.
      </div>
    `).join('');
  }