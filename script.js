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

    function mudarCorTemporaria() {
        mudarCor('black');
        document.querySelector('.container').style.color = 'white';

        setTimeout(function() {
            mudarCor('white');
            document.querySelector('.container').style.color = 'black';
        }, 3000);
    }

    function mostrarHora() {
        const agora = new Date();

        document.getElementById('hora').innerText =
            'Data: ' + agora.toLocaleString();
    }

    function apagarTudo() {
        document.body.innerHTML = '';
    }

    function guardarNome() {
        const nome = document.querySelector('.input').value;
        document.getElementById('mensagem').innerText = 'Bom dia ' + nome + '!';
    }