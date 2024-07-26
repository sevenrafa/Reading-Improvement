class LeituraController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._leituraLista = new LeituraLista();
        this._palavra = $('#palavra')
        this._intervalId = null;
        this._velocidade = $('#velocidade')
    }

    comecar() {
        this._condicoes();
    }

    parar() {
        clearInterval(this._intervalId);
        this._palavra.textContent = 'Palavras aqui'
    }

    _condicoes() {
        if (this._velocidade.value == 1) {this._intervalId = setInterval(() => {
            this._leituraLista._displayWords();
        }, 1000);
    }else if (this._velocidade.value == 2) {this._intervalId = setInterval(() => {
        this._leituraLista._displayWords();
    }, 500);}else if (this._velocidade.value == 3) {this._intervalId = setInterval(() => {
        this._leituraLista._displayWords();
    }, 300);}}
}
