const containerPerfil = document.querySelector('.main__container-perfil');
const containerFooter = document.querySelector('.footer');
const iconShare = document.querySelector('.icon-share');
const iconShareFooter = document.querySelector('.icon-share-footer');


function iconToggle () {
    containerPerfil.classList.toggle('activate');
    containerFooter.classList.toggle('activate');
};
iconShare.addEventListener('click', iconToggle);
iconShareFooter.addEventListener('click', iconToggle);

