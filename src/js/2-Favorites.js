'use strict';

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_favorite_cards");
    
    for (const card of allCards){
        card.addEventListener('click', handleClickCard);
    }
   
}

function handleClickCard(event){
   let selectedCard = event.currentTarget;
   selectedCard.classList.toggle("js_favorite_class");
}

