import { WisataList, HotelList } from '../data/data-source.js';

const wisata = () => {
    const wisataList = document.querySelector('.wisata');

    WisataList.forEach((wisata) => {
        const name = wisata.name;
        const image = wisata.image;

        const wisataElement = document.createElement('div');
        wisataElement.setAttribute("class", `${name} image`);

        wisataElement.innerHTML = 
        `<img src="${image}" alt="${name}">`

        wisataList.append(wisataElement);
    })
};
wisata();

const hotels = () => {
    const hotelList = document.querySelector(".list-hotel");

    HotelList.forEach((hotel) => {
        const name = hotel.name;
        const nama = hotel.nama;
        const image = hotel.image;
        const text1 = hotel.text1;
        const text2 = hotel.text2;
        const textSpan = hotel.textSpan;

        const hotelElement = document.createElement('div');
        hotelElement.setAttribute("class", `hotels ${nama}`);

        hotelElement.innerHTML = `
        <img src="${image}" alt="${nama}">
        <h2>${name}</h2>
        <p class="desc">${text1}</p>
        <a href="${text2}">
            <p class="span">${textSpan}</p>
        </a>
        `

        hotelList.append(hotelElement);
    })
};
hotels();

export {wisata, hotels};