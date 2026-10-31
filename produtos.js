
const carrossel = document.getElementById('carrossel');

const anterior = document.getElementById('anterior');

const proximo = document.getElementById('proximo');

// Avançar os produtos
proximo.addEventListener('click', () => {

    carrossel.scrollBy({
        left: 300,
        behavior: 'smooth'
    });

});

// Voltar os produtos
anterior.addEventListener('click', () => {

    carrossel.scrollBy({
        left: -300,
        behavior: 'smooth'
    });

});
