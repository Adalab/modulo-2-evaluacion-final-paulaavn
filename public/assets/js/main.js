'use strict';
'use strict';

const input = document.querySelector(".js_input");
const button = document.querySelector(".js_btn");
const showsList = document.querySelector(".js_series_list")

let arraySeries = [];

function paintSeries(){
    showsList.innerHTML = '';
    searchSerie();
}

function searchSerie(){
    const selectedSerie = input.value
    fetch(`//api.tvmaze.com/search/shows?q=${selectedSerie}`)
        .then(response => response.json())
        .then((data) => {
            arraySeries = data;
            
            for (let i = 0; i < data.length; i++){
                const serieData = data[i].show;
                const seriId = data[i].id;
                if(serieData.image === null){
                    showsList.innerHTML += 
                    `<li data-id="${serieData.id}" class="js_favorite_cards js_li">
                    <h2 class="js_serie_title">${serieData.name}</h2>
                    <img class="js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
                    </li>`;
                }else{
                    showsList.innerHTML +=
                    `<li data-id="${serieData.id}" class="js_favorite_cards js_li">
                    <h2 class="js_serie_title">${serieData.name}</h2>
                    <img class="js_image" src="${serieData.image.medium}"/>
                    </li>`;
                }
                
                
            } 
            addListenersToCards();
        });
     
}


button.addEventListener("click", searchSerie);


'use strict';

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_favorite_cards");

    for (const card of allCards){
        card.addEventListener('click', handleClickCard);
    }
   
}

function handleClickCard(event){
    console.log(event.currentTarget);
   let selectedCard = event.currentTarget;
   selectedCard.classList.toggle("js_favorite_class");
}


'use strict';
// const reloadButton = document.getElementById("#reload");
// function reload() {
//   location.reload();

// }
// reloadButton.addEventListener("click", reload, false);
// ecuerda dar ID = reload al input en el html
'use strict';




//# sourceMappingURL=main.js.map
