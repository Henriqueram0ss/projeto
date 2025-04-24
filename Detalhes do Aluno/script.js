
    const alunos = [
        {
            nome: "Jonathan",
            turma: "3ºA",
            matricula: "202501",
            nota1: 9.7,
            nota2: 7.8,
            nota3: 8.0
        },
        {
            nome: "Walaci",
            turma: "3ºA",
            matricula: "202501",
            nota1: 7.5,
            nota2: 8.0,
            nota3: 7.7
        },
        {
            nome: "Henrique",
            turma: "3ºA",
            matricula: "202501",
            nota1: 9.5,
            nota2: 8.9,
            nota3: 10.0
        },
        {
            nome: "Gustavo",
            turma: "3ºA",
            matricula: "202501",
            nota1: 9.5,
            nota2: 9.2,
            nota3: 10.0
        }
    ];

    const input = document.querySelector('.pesquisa input');
    const lupa = document.querySelector('.icone-lupa');

    function buscarAluno() {
        const valor = input.value.toLowerCase();
        const aluno = alunos.find(aluno => aluno.nome.toLowerCase().includes(valor));

        if (aluno) {
            document.getElementById('nome').textContent = `NOME: ${aluno.nome}`;
            document.getElementById('turma').textContent = `TURMA: ${aluno.turma}`;
            document.getElementById('matricula').textContent = `MATRICULA: ${aluno.matricula}`;
            document.getElementById('nota1').textContent = `NOTA 1: ${aluno.nota1}`;
            document.getElementById('nota2').textContent = `NOTA 2: ${aluno.nota2}`;
            document.getElementById('nota3').textContent = `NOTA 3: ${aluno.nota3}`;
        } else {
            alert("Aluno não encontrado.");
        }
    }

    
    lupa.addEventListener('click', buscarAluno);

    
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            buscarAluno();
        }
    });
