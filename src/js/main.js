'use strict';

//1º--> Crear un  Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API (`http://api.tvmaze.com/search/shows?q=') // Guía JSON (https://api.tvmaze.com/search/shows?q=girls)

// 1.1----> Recoger texto introducido por la usuaria en el input
// 1.2---->Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen de la serie y el título.

// 1.3---->Algunas de las series que devuelve el API no tienen imagen. En ese caso hay que mostrar una imagen de relleno. Podemos crear una imagen de relleno con el servicio de placeholder.com donde en la
// propia URL indicamos el tamaño, colores, 
//texto: https://via.placeholder.com/210x295/ffffff/666666/?text=TV.

// //Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML
// o manipulando de forma avanzada el DOM.


// 3. Favoritos
//  3.1---->Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son nuestras series favoritas. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:
        // El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
        // Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
// con las series favoritas. Os recomendamos crear un variable o constante de tipo array en JS para
// almacenar las series favoritas.
// Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.


const input = document.querySelector(".js_input");
const selectedSerie = input.value;
const api = 'http://api.tvmaze.com/search/shows?q=';

const button = document.querySelector(".js_btn");
const containerList = document.querySelector(".js_list_container")



function searchSerie(){
    const infoSerie = `${api} + ${selectedSerie}`;

    fetch(infoSerie)
        .then(response => response.json())
        .then((data) => {
       
            containerList.innerHTML='';
     
            for(const serie of data){
            const serieName = serie.show.name;
            const id = serie.show.id;
            let imageURL = '';
                if(serie.show.image === null){
                    imageURL = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                }else{
                    imageURL= serie.show.image.original
                }
        
        }
   });

}
  


button.addEventListener("click", searchSerie);