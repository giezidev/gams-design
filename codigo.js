const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('active');

    menuBtn.setAttribute('aria-expanded', aberto);
    menuBtn.setAttribute(
        'aria-label',
        aberto ? 'Fechar menu' : 'Abrir menu'
    );
});


const imagensClientes = document.querySelectorAll('.op img');
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const fecharLightbox = document.querySelector('#lightbox-fechar');

function abrirImagem(imagem) {
    lightboxImg.src = imagem.src;
    lightboxImg.alt = imagem.alt;

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-aberto');

    fecharLightbox.focus();
}

function fecharImagem() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-aberto');

    lightboxImg.src = '';
}

imagensClientes.forEach((imagem) => {
    imagem.addEventListener('click', () => {
        abrirImagem(imagem);
    });
});

fecharLightbox.addEventListener('click', fecharImagem);

// Fecha ao clicar fora da imagem
lightbox.addEventListener('click', (evento) => {
    if (
        evento.target === lightbox ||
        evento.target === lightboxImg
    ) {
        if (evento.target === lightbox) {
            fecharImagem();
        }
    }
});

// Fecha ao pressionar Esc
document.addEventListener('keydown', (evento) => {
    if (
        evento.key === 'Escape' &&
        lightbox.classList.contains('active')
    ) {
        fecharImagem();
    }
});
