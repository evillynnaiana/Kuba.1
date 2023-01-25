const $$ = function (id) {
    return document.getElementById(id);
}
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
setInterval(next, 5000);

//MENU-RESPONSIVO
const botaoMenu = $$('botao-menu');
const menuMobile = $$('menu-mobile');

botaoMenu.addEventListener('click', (evento) => {

    menuMobile.classList.toggle('toggle');

    document.addEventListener('click', (e) => {
        if (e.target.id === '') {
            menuMobile.classList.remove('toggle');
        }
    });

    //ACESSIBILIDADE
    const toggle = menuMobile.classList.contains('toggle');
    evento.currentTarget.setAttribute('aria-expanded', toggle);

    toggle ? evento.currentTarget.setAttribute('aria-label', 'Fechar Menu') :
        evento.currentTarget.setAttribute('aria-label', 'Abrir Menu');


});

//SUBMENU

const produto = $$('produto');
const submenu = $$('submenu');
produto.addEventListener('click', () => submenu.classList.toggle('visivel'));