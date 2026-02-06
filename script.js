    const cores = ['orange', '#f5c2a0', 'lightgreen', 'green', 'pink'];

    let corAtual = '#E6E6E6';

    function mudarCor(cor) {
        document.querySelector('.container').style.backgroundColor = cor

        document.getElementById('corAtual').innerText =
            'A cor usada é: ' + cor;
        
        corAtual = cor;
    }

    function mudarCorAleatorio() {
        let corSorteada;

        do {
            const indice = Math.floor(Math.random() * cores.length);
            corSorteada = cores[indice];
        } while (corSorteada === corAtual);
            mudarCor(corSorteada);
    }


