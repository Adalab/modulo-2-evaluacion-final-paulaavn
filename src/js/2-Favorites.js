'use strict';

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_favorite_cards");

    for (const card of allCards){
        card.addEventListener('click', handleClickCard);
    }
   
}

function handleClickCard(event){
const selectedCard = event.currentTarget;
   selectedCard.classList.toggle("js_favorite_class"); 

   if(selectedCard.classList.contains("js_favorite_class")){
    favouriteSeriesArray.push(selectedCard)
    console.log(favouriteSeriesArray);
   }
   console.log(selectedCard);
}

function paintFavoriteList(){

    for(let i = 0; i < favouriteSeriesArray.length; i++){
        favoritesList.innerHTML += `<li>${selectedCard}</li>`;
    }
        
}
// const favoritesSeriesToSave = favouriteSeriesArray.find(showsList.classList.contains("js_favorite_class"));
// console.log(favoritesSeriesToSave);


// let newList= document.querySelector(".js_favourite_series");
// newList.innerHTML = `<li class="new_list_cards">
//                     <h2 class="js_serie_title">${favouriteSeriesArray.name}</h2>
//                     <img class="js_image" src= "${favouriteSeriesArray.image.medium}"/>
//                     </li>`;








// // function saveFavoriteSeries (){
// //    let favoriteItem = selectedCard;
// //    const newList = document.querySelector(".js_favourite_series");
// //    if(selectedCard.classList.contain("js_favorite_class")){
// //        newList.innerHTML = favoriteItem
// //    }    
    
// }
