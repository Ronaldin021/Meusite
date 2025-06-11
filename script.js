
function abrirPresente() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('conteudoCard').style.display = 'block';
}

// Contador desde 05/04/2025
function atualizarContador() {
    const inicio = new Date('2024-03-19T00:00:00');
    const agora = new Date();
    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById('contador').innerText = 
        `Eu te amo há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Corações caindo
const canvas = document.getElementById('coracoes');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

const coracoes = Array.from({length: 40}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * 1 + 0.5,
    color: Math.random() > 0.5 ? '#e91e63' : '#ff1493'
}));

function desenhar() {
    ctx.clearRect(0, 0, width, height);
    coracoes.forEach(c => {
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.bezierCurveTo(c.x + c.size / 2, c.y - c.size, c.x + c.size * 1.5, c.y + c.size / 3, c.x, c.y + c.size);
        ctx.bezierCurveTo(c.x - c.size * 1.5, c.y + c.size / 3, c.x - c.size / 2, c.y - c.size, c.x, c.y);
        ctx.fill();

        c.y += c.speedY;
        if (c.y > height) {
            c.y = -20;
            c.x = Math.random() * width;
        }
    });
    requestAnimationFrame(desenhar);
}

desenhar();
