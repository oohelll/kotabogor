import { HotelList } from "../data/data-source.js";
import { navSlide, ContactList } from "../js/main.js";

const hotels = () => {
    const hotelList = document.querySelector(".hotel-list");
    const more = document.querySelector('.more');

    HotelList.forEach((hotel) => {
        const image = hotel.image2;
        const title = hotel.title;
        const text2 = hotel.text2;

        const hotelElement = document.createElement('div');
        hotelElement.setAttribute("class", "hotels");
        hotelElement.setAttribute("id", "hotels");

        hotelElement.innerHTML = `
        <img src="${image}">
        <div class="text">
            <p>${title}.</p>
            <p class="btn"><a href="${text2}">More Details</a>
            </p>
        </div>
        `

        hotelList.append(hotelElement);
        more.before(hotelElement);
    })
};
hotels();