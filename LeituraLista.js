class LeituraLista {
    constructor() {
        this._inputPalavras = document.querySelector('#palavras__lista');
        this._palavras = ['abacate', 'bacana', 'cachoeira', 'daí', 'elevador', 'fantasia', 'ganho',
            'horizonte', 'igreja', 'jacaré', 'kitten', 'lagoa', 'monstro', 'navalha',
            'océano', 'panda', 'quadro', 'rato', 'sol', 'tigre', 'urso', 'vaca',
            'xadrez', 'yoga', 'zebra', 'abóbora', 'brisa', 'cachorro', 'devoção',
            'estrela', 'fogo', 'gelo', 'harmonia', 'imaginação', 'jardim', 'ketchup',
            'leão', 'maçã', 'nuvem', 'olho', 'piano', 'quimono', 'rosa', 'sabão',
            'torrada', 'uva', 'vento', 'xadrez', 'zelo', 'abóbora', 'baile',
            'cachoeira', 'desenho', 'escada', 'fumaça', 'gato', 'ilusão', 'jardim',
            'kilo', 'leitura', 'mistério', 'ninho', 'orvalho', 'pipa', 'quintal',
            'relógio', 'sombra', 'tigre', 'uva', 'vela', 'xadrez', 'zangão',
            'abacaxi', 'batata', 'cachorro', 'dente', 'elefante', 'festa', 'guitarra',
            'horizonte', 'imortal', 'joia', 'kit', 'letra', 'moeda', 'nuvem', 
            'oculto', 'pasta', 'quase', 'rima', 'safira', 'tela', 'urso', 'vela',
            'xaxim', 'zebra', 'algoritmo', 'beijo', 'caixote', 'dúvida', 'espaço',
            'fósforo', 'golpe', 'harpa', 'invólucro', 'jogo', 'kilo', 'leitura',
            'máquina', 'nave', 'olho', 'plano', 'questão', 'rastro', 'selo', 'tigre',
            'útil', 'verde', 'xaxim', 'zangado', 'abóbora', 'branco', 'cabelo',
            'dócil', 'escada', 'flores', 'gelo', 'hino', 'incenso', 'jornal', 
            'kitten', 'leite', 'música', 'noite', 'océano', 'paz', 'quase', 
            'resina', 'silêncio', 'tigre', 'uva', 'vó', 'xaxim', 'zebra',
            'abóbora', 'balança', 'cachimbo', 'dó', 'enigma', 'fascínio', 'galo',
            'hipopotamo', 'iguana', 'jacarandá', 'koala', 'luz', 'moeda', 'notícia',
            'orquestra', 'papel', 'quimera', 'régua', 'sereia', 'tigre', 'urso',
            'vulcão', 'xaxim', 'zen', 'arte', 'bastão', 'cachoeira', 'deus',
            'esmalte', 'fruta', 'gato', 'ilha', 'jovem', 'ketchup', 'lanterna',
            'marfim', 'neve', 'ocelote', 'pista', 'quente', 'rosal', 'sombra', 
            'tigre', 'urso', 'verão', 'xaxim', 'zaqueu'
          ];
          
          
    }

    _getRandomWords(arr, num) {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    _displayWords() {
        let palavra = document.querySelector('#palavra')
        let randomWords = this._getRandomWords(this._palavras, this._inputPalavras.value);
        palavra.innerHTML = randomWords.join(' ')
    }
}