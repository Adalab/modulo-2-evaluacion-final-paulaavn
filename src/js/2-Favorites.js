'use strict';

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_favorite_cards");
        for (const card of allCards){
            card.addEventListener("click",handleClickCard);
        }
}

function handleClickCard(event){
   const selectedCard = event.currentTarget;
   selectedCard.classList.toggle('js_favourite_class');
}

