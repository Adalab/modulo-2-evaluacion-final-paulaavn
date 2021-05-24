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

