let corAtual = null;

const cores = {
    orange: 'bg-orange',
    '#f5c2a0': 'bg-skin',
    lightgreen: 'bg-lightgreen',
    green: 'bg-green',
    pink: 'bg-pink'
};

function mudarCorClasse(classe, corTexto) {
    const container = document.querySelector('.container');

    container.style.backgroundColor = '';

    container.className = 'container';

    container.classList.add(classe);

    document.getElementById('corAtual').innerText =
        'A cor usada é: ' + corTexto;

    corAtual = corTexto;
}

function mudarCorAleatorio() {
    const listaCores = Object.keys(cores);
    let corSorteada;

    do {
        const indice = Math.floor(Math.random() * listaCores.length);
        corSorteada = listaCores[indice];
    } while (corSorteada === corAtual);

    const classe = cores[corSorteada];

    mudarCorClasse(classe, corSorteada);
    corAtual = corSorteada;
}

function mudarCorTemporaria() {
    mudarCorClasse('bg-black', 'black');
    document.querySelector('.container').style.color = 'white';
    document.querySelector('.hora').style.color = 'white';

    setTimeout(function () {
        mudarCorClasse('bg-white', 'white');
        document.querySelector('.container').style.color = 'black';
        document.querySelector('.hora').style.color = 'black';
    }, 3000);
}

function mostrarHora() {
    const agora = new Date();

    document.getElementById('hora').innerText =
        'Data: ' + agora.toLocaleString();
    return agora;
}

function apagarTudo() {
    document.body.innerHTML = '';
}

function guardarNome() {
    const nome = document.getElementById('nome').value;
    document.getElementById('mensagem').innerText = mostrarSaudacao() + ' ' + nome + '!';
}

function mostrarSaudacao() {
    const agora = mostrarHora();
    const hora = agora.getHours();

    let saudacao;
    if (hora < 12) {
        saudacao = 'Bom dia';
    } else if (hora < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    return saudacao;
}

function escolherCor() {
    const cor = document.getElementById('cor').value;
    document.querySelector('.container').style.backgroundColor = cor;
    mudarCor(cor);
}