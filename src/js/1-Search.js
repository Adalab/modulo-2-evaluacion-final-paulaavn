'use strict';

//1.ARRANCAR LA PÁGINA ---> 2. LEER EL VALOR DEL INPUT ----> 3.OBTENER LOS DATOS DE LA API ----> 4.GUARDAR LOS DATOS EN UN ARRAY ----> 5.LEER LA LISTA DE FAVORITOS DEL LOCAL STORAGE ----> 6.PINTAR -----> 7.ESCUCHAR EL BOTÓN

//1.ARRANCAR LA PÁGINA

const input = document.querySelector(".js_input");
const button = document.querySelector(".js_btn");
const showsList = document.querySelector(".js_series_list")

let arraySeries = [];

function paintSeries(){
    showsList.innerHTML = '';
    searchSerie();
}

function searchSerie(){
    //2. LEER EL VALOR DEL INPUT
    const selectedSerie = input.value
    //3.OBTENER LOS DATOS DE LA API
    fetch(`http://api.tvmaze.com/search/shows?q=${selectedSerie}`)
        .then(response => response.json())
        .then((data) => {
            //4.GUARDAR LOS DATOS EN UN ARRAY
            arraySeries = data;
            for (let i = 0; i < data.length; i++){
                const serieData = data[i].show;
                //console.log(serieData.id)
                //console.log(serieData.image.medium)
                if(serieData.image === null){
                    showsList.innerHTML += 
                    `<li data-id="${serieData.id} class="js_li">
                    <h2 class="js_title">${serieData.name}</h2>
                    <img class="js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>
                    </li>`;
                }else{
                    showsList.innerHTML +=
                    `<li data-id="${serieData.id} class="js_li">
                    <h2 class="js_title">${serieData.name}</h2>
                    <img class="js_image" src="${serieData.image.medium}"/>
                    </li>`;
                }
            } 
        });
}

button.addEventListener("click", searchSerie);

