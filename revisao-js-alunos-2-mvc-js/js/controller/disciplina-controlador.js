class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisc = document.querySelector("#nomeDisc").value;
        const codDisc = Number(document.querySelector("#cod").value);
        this.disciplinaServico.inserir(nomeDisc, codDisc);
        this.mostrarDisciplinaNoHTML(nomeDisc, codDisc);
        alert('Disciplina inserido com sucesso!')
    }

    inserirAlunoDisciplina() {
        const nomeAluno = document.querySelector("#nomeALuno").value;
        const idadeAluno = Number(document.querySelector("#idadeAluno").value);
        const codDisc = Number(document.querySelector("#alunoDisc").value);
        const disc = this.disciplinaServico.buscarPorCod(codDisc);
        if (disc) {
            this.disciplinaServico.inserirAlunoDisc(nomeAluno, idadeAluno, codDisc);
            this.mostrarAlunoDiscHTML(nomeAluno, codDisc);
            alert('Aluno inserido na disciplina com sucesso!')
        } else
            alert('Menor de idade ou a disciplina não existe!')
    }

    mostrarDisciplinaNoHTML(nome, cod) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${cod}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.querySelector('#listagemDisc').appendChild(elementoP);
    }

    removerDisciplinaDaLista(nome) {
        this.disciplinaServico.remover(nome);
    }

    removerAlunoDisciplina(nomeAluno, codDisc) {
        this.disciplinaServico.removerAlunoDisc(nomeAluno, codDisc);
    }

    mostrarAlunoDiscHTML(nomeAluno, codDisc) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nomeAluno} - ${codDisc}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerAlunoDisciplina(event.target.parentElement.getAttribute("data-codigo"), nomeAluno);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        elementoP.setAttribute("data-codigo", codDisc)
        document.querySelector('#listagemAlunoDisc').appendChild(elementoP);
    }
}
