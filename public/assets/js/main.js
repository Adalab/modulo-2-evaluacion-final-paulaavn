'use strict';

const input = document.querySelector(".js_input");
const button = document.querySelector(".js_btn");
const showsList = document.querySelector(".js_series_list");
const favoritesList= document.querySelector(".js_favourite_series");

let arraySeries = [];
let favouriteSeriesArray =[];
'use strict';

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
                const serieId = data[i].id;
                if(serieData.image === null){
                    showsList.innerHTML += 
                    `<li data-id="${serieData.id}" class="js_favorite_cards js_li">
                    <h3 class="css_serie_title js_serie_title">${serieData.name}</h3>
                    <img class="css_image js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
                    </li>`;
                }else{
                    showsList.innerHTML +=
                    `<li data-id="${serieData.id}" class="js_favorite_cards js_li">
                    <h3 class="css_serie_title js_serie_title">${serieData.name}</h3>
                    <img class="css_image js_image" src="${serieData.image.medium}"/>
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
const selectedCard = event.currentTarget;
const selectedCardId = parseInt(selectedCard.dataset.id);
   selectedCard.classList.toggle("js_favorite_class"); 

//    if(selectedCard.classList.contains("js_favorite_class")){
//     favouriteSeriesArray.push(selectedCard)
//    }
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
        `<li data-id="${listFavSeries.id}" class="js_favorite_cards js_li">
        <h3 class="css_serie_title js_serie_title">${data2.name}</h3>
        <img class="css_image js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
        </li>`;
        }else{
        favoritesList.innerHTML +=
        `<li data-id="${data2.id}" class="js_favorite_cards js_li">
        <h3 class="css_serie_title js_serie_title">${data2.name}</h3>
        <img class="css_image js_image" src="${data2.image.medium}"/>
        </li>`;
        }
    }
}
    
// function paintFavoriteList(){
    
//   favoritesList.innerHTML = "";
//     favouriteSeriesArray = favData;
//      for(let i = 0; i < favData.length; i++){
//         const favSerieData = favData[i].show;
//         const favSerieId = favData[i].id;
//         if(favSerieData.image === null){
//             favoritesList.innerHTML += 
//             `<li data-id="${favSerieData.id}" class="js_favorite_cards js_li">
//             <h3 class="css_serie_title js_serie_title">${favSerieData.name}</h3>
//             <img class="css_image js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
//             </li>`;
//         }else{
//             favoritesList.innerHTML +=
//             `<li data-id="${favSerieData.id}" class="js_favorite_cards js_li">
//             <h3 class="css_serie_title js_serie_title">${favSerieData.name}</h3>
//             <img class="css_image js_image" src="${favSerieData.image.medium}"/>
//             </li>`;
//         }
//     } 
        
// }


// // const favoritesSeriesToSave = favouriteSeriesArray.find(showsList.classList.contains("js_favorite_class"));
// // console.log(favoritesSeriesToSave);


// // let newList= document.querySelector(".js_favourite_series");
// // newList.innerHTML = `<li class="new_list_cards">
// //                     <h2 class="js_serie_title">${favouriteSeriesArray.name}</h2>
// //                     <img class="js_image" src= "${favouriteSeriesArray.image.medium}"/>
// //                     </li>`;








// // function saveFavoriteSeries (){
// //    let favoriteItem = selectedCard;
// //    const newList = document.querySelector(".js_favourite_series");
// //    if(selectedCard.classList.contain("js_favorite_class")){
// //        newList.innerHTML = favoriteItem
// //    }    
    
// }

'use strict';
// const reloadButton = document.getElementById("#reload");
// function reload() {
//   location.reload();

// }
// reloadButton.addEventListener("click", reload, false);
// ecuerda dar ID = reload al input en el html
'use strict';




//# sourceMappingURL=main.js.map
