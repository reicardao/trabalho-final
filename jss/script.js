const sonic = document.querySelector('.sonic');
const picos = document.querySelector('.picos');


const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const picosPosition = picos.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (picosPosition < 120 && picosPosition > 0 && sonicPosition < 60) {

        picos.style.animation ='none';
        picos.style.left = `${picosPosition}px`;

        sonic.style.animation ='none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'imagens/sonic morto.png';
        sonic.style.width = '80px'
        sonic.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);