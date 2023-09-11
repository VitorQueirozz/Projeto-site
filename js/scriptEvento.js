// JavaScript para mostrar/ocultar a imagem ampliada
const imagensAmpliaveis = document.querySelectorAll('.minha-imagem');
const imagemAmpliada = document.querySelector('#imagem-ampliada');
const imagemAmpliadaConteudo = imagemAmpliada.querySelector('img');

imagensAmpliaveis.forEach(imagem => {
    imagem.addEventListener('click', () => {
        const src = imagem.getAttribute('src');
        imagemAmpliadaConteudo.setAttribute('src', src);
        imagemAmpliada.style.display = 'block';
    });
});

imagemAmpliada.addEventListener('click', () => {
    imagemAmpliada.style.display = 'none';
});
