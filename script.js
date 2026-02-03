window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.button');
    const container = document.querySelector('.container');

    if (!container) {
        console.error('Container não encontrado!');
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const style = window.getComputedStyle(button);
            const bgColor = style.getPropertyValue('background-color');

            if (!bgColor) {
                console.error('Não foi possível ler a cor do botão:', button);
                return;
            }

            container.style.backgroundColor = bgColor;
        });
    });
});