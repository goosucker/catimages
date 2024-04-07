const btn = document.querySelector(".main__button");
const wrap = document.querySelector(".main__wrap");
async function getCatImages() {
    try {
        let res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
        if (!res.ok) {
            console.log('Произошла ошибка!');
        }
        let data = await res.json();
        if (data) {
            for (i = 0; i < data.length; i++) {
                let img =`<div class="main__img_box"><img class="main__img" src="${data[i].url}" alt="фото котэка"></div>`;
                wrap.innerHTML += img;
            }
        }
    } catch (e) {console.error(e.massage)}
}
btn.addEventListener("click", getCatImages);



