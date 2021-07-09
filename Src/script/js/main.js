const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
    });
};

navSlide();

const ContactList = () => {
    const insta = document.querySelector('.instagram');
    const instaColor = document.getElementById('instagram');
    insta.addEventListener('mouseenter', () => {
        instaColor.style.backgroundColor = 'black';
    })
    insta.addEventListener('mouseleave', () => {
        instaColor.style.backgroundColor = 'white';
    })

    const twit = document.querySelector('.twitter');
    const twitColor = document.getElementById('twitter');
    twit.addEventListener('mousemove', () => {
        twitColor.style.backgroundColor = 'black';
    })
    twit.addEventListener('mouseleave', () => {
        twitColor.style.backgroundColor = 'white';
    })

    const linkkedin = document.querySelector('.linkedin');
    const linkColor = document.getElementById('linkedin');
    linkkedin.addEventListener('mouseenter', () => {
        linkColor.style.backgroundColor = 'black';
    })
    linkkedin.addEventListener('mouseleave', () => {
        linkColor.style.backgroundColor = 'white';
    })
};
ContactList();

export {navSlide, ContactList};