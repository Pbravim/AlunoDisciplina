class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(cod) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.cod === cod);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCod(cod) {
        console.log((this._disciplinas.filter((disciplinas => disciplinas.cod === cod))));
        return this._disciplinas.find(disciplinas => disciplinas.cod === cod);
    }

    inserirAlunoDisc(aluno, disciplina){
        const listaAlunos = disciplina.alunos;
        listaAlunos.push(aluno);
        disciplina.alunos = listaAlunos
        }

    removerAlunoDisc(nome, disc){
        const indxDisc = disc.alunos.indexOf(aluno => aluno.nome === nome);
        disc.alunos.splice(indxDisc, 1);
    }
}
