
const galeria = document.getElementById('op')
const lightbox = document.getElementById('lightbox')
const imagemAmpliada = document.getElementById('lightbox-img')
const botaoFechar = document.getElementById('lightbox-fechar')

// Abre a imagem clicada
galeria.querySelectorAll('img').forEach((imagem) => {
    if (imagem.id === 'lightbox-img') return

    imagem.addEventListener('click', () => {
        imagemAmpliada.src = imagem.src
        imagemAmpliada.alt = imagem.alt

        lightbox.setAttribute('aria-hidden', 'false')
    })
})

// Fecha ao clicar no botão
botaoFechar.addEventListener('click', () => {
    lightbox.setAttribute('aria-hidden', 'true')
    imagemAmpliada.src = ''
})

//botão

const botaoMenu = document.querySelector('.menu-btn')
const menu = document.getElementById('menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')

    const menuAberto = menu.classList.contains('ativo')

    botaoMenu.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    )
})

