import { WisataList } from "../data/data-source.js";
import { navSlide, ContactList } from "../js/main.js";

const wisata = () => {
    const wisataList = document.querySelector('.wisata-list');
    const more = document.querySelector('.more');

    WisataList.forEach((wisata) => {
        const name = wisata.name;
        const text1 = wisata.text1;
        const text2 = wisata.text2
        const image = wisata.image2;

        const wisataElement = document.createElement('div');
        wisataElement.setAttribute("class", "wisata");
        wisataElement.setAttribute("id", "wisata");

        wisataElement.innerHTML = 
        `
        <img src="${image}" alt="${name}">
        <div class="text">
            <p>${text1}.</p>
            <p>${text2}.</p>
        </div>
        `

        wisataList.append(wisataElement);
        more.before(wisataElement);
    })
};
wisata();