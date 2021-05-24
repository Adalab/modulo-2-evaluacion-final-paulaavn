'use strict';

let choosenSeries = [];

function addListenersToCards(){
    const allCards = document.querySelectorAll(".js_cards");
        for (const card of allCards){
            card.addEventListener("click",handleClickCard);
        }
}

function handleClickCard(event){
   const whereIAddedTheEvent = event.currentTarget;
    const getId = whereIAddedTheEvent.serieData.id;
    whereIAddedTheEvent.toggle('js_favourite_class');
}

