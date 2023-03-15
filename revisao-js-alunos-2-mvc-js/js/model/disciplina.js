class Disciplina {
    constructor(nome, cod) {
        this._nome = nome;
        this._cod = cod;
        this._alunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cod(){
        return this._cod;
    }
    set cod(novoCod){
        this._cod = novoCod;
    }

    get alunos(){
        return this._alunos;
    }
    set alunos(novosAlunos){
        this._alunos = novosAlunos;
    }
}
