const input=document.querySelector(".js_input"),button=document.querySelector(".js_btn"),showsList=document.querySelector(".js_series_list");let arraySeries=[];function paintSeries(){showsList.innerHTML="",searchSerie()}function searchSerie(){const e=input.value;fetch("http://api.tvmaze.com/search/shows?q="+e).then(e=>e.json()).then(e=>{arraySeries=e;for(let s=0;s<e.length;s++){const t=e[s].show;null===t.image?showsList.innerHTML+=`<li class="js_li">\n                    <h2 class="js_title">${t.name}</h2>\n                    <img class="js_image" src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"/>\n                    </li>`:showsList.innerHTML+=`<li class="js_li">\n                    <h2 class="js_title">${t.name}</h2>\n                    <img class="js_image" src="${t.image.medium}"/>\n                    </li>`}})}button.addEventListener("click",searchSerie);