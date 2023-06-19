var images = ['img/ia_cabeca_edit.jpg', 'img/fundo_bits.jpg', 'img/ia_neuro_edit.jpg'];
var imagemAtual = 0;
var banner = document.getElementById("home")



function changeBackgroundImage() {
    imagemAtual++;
    if(imagemAtual == images.length){
        imagemAtual = 0;
    }
    document.getElementById("home").style.backgroundImage = 'url(' + images[imagemAtual] + ')';
}

setInterval(changeBackgroundImage, 5000);



let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');

            });
        };

    });

    let header = document.querySelector('header');

    header.classList.toggle('header2', window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('ativa')

};


let menuIcon = document.querySelector('#menu-icones');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('ativa')

};

