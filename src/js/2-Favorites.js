'use strict';

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_favorite_cards");

    for (const card of allCards){
        card.addEventListener('click', handleClickCard);
    }
   
}

function handleClickCard(event){
const selectedCard = event.currentTarget;
const selectedCardId = parseInt(selectedCard.dataset.id);
   selectedCard.classList.toggle("js_favorite_class"); 

  const findFavCard = arraySeries.find((favSer) => favSer.show.id === selectedCardId);
    favouriteSeriesArray.push(findFavCard);
    createFavList()
    
    console.log(findFavCard);
   console.log(selectedCardId);
   console.log(favouriteSeriesArray);
}

function createFavList(){
    favoritesList.innerHTML = '';
    for(let i = 0; i < favouriteSeriesArray.length; i++){
        let data2 = favouriteSeriesArray[i].show;
        let listFavSeries = {};
        listFavSeries.name = data2.name;
        listFavSeries.id = data2.id;
        if(listFavSeries.image === null){
        favoritesList.innerHTML += 
        `<li data-id="${listFavSeries.id}" class="js_favorite_cards js_li js_fav_card">
        <h3 class="css_serie_title js_serie_title">${data2.name}</h3>
        <img class="css_image js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
        <i class="fas fa-times-circle js_close_btn"></i>
        </li>`;
        }else{
        favoritesList.innerHTML +=
        `<li data-id="${data2.id}" class="js_favorite_cards js_li js_fav_card">
        <h3 class="css_serie_title js_serie_title">${data2.name}</h3>
        <img class="css_image js_image" src="${data2.image.medium}"/>
        <i class="fas fa-times-circle js_close_btn"></i>
        </li>`;
        }
    }
}
    



