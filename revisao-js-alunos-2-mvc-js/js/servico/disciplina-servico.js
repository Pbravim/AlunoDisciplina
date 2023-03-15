class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, cod) {
        const disc = new Disciplina(nome, cod);
        return this.repositorio.inserir(disc);
    }

    remover(nome) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorCod(cod) {
        return this.repositorio.buscarPorCod(cod);
    }

    inserirAlunoDisc(nome, idade, codDisc){
        const aluno = new Aluno(nome, idade);
        if (aluno.idade < 18) {
            return undefined;
        }
        const disc = this.repositorio.buscarPorCod(codDisc);
        if (disc !== undefined) {
            return this.repositorio.inserirAlunoDisc(aluno, disc);
        }
        // é menor de idade. Deveria devolver erro

    }
    removerAlunoDisc(nome,codDisc){
        const disc = this.repositorio.buscarPorCod(codDisc);
        if (disc !== undefined){
            this.repositorio.removerAlunoDisc(nome,disc);
        }
    }
}
