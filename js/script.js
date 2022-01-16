// Variables
const card_footer = document.querySelector('.card_footer');
const share_icon = document.querySelector('.share-icon');
const author_card = document.querySelector('.author');
const card_social = document.querySelector('.card_socials');

// Eventos
share_icon.addEventListener('click', mostrarOcultar);


// Funciones
function mostrarOcultar() {

    if (!card_footer.classList.contains('active')) {
        card_footer.classList.add('active');
        card_social.style.display = '';
    } else {
        author_card.style.display = '';
        card_footer.classList.remove('active');

    }
}