    function mudarCor(cor) {
        document.querySelector('.container').style.backgroundColor = cor

        document.getElementById('corAtual').innerText =
            'A cor usada é: ' + cor;
    }
