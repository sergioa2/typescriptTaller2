import {series} from "./data.js";
import {Serie} from "./data.js";




function mostrarSeries():void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let seriesTable: HTMLElement = document.getElementById("tabla-series")!;
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${serie.id}</th>
        <td style="color:blue"><a href="#" id="${serie.name}">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        seriesTbody.appendChild(trElement);
        console.log(`se agrego la serie ${serie.name}`);
    }
    seriesTable.appendChild(seriesTbody);

}


function calcularPromedioSeries():number{
    let totalSeasons:number = 0;
    for(let serie of series)
    {
        totalSeasons+=serie.seasons
    }
    return totalSeasons/series.length;
}



function mostrarPromedioSeries():void{
    let casillaHorizontal: HTMLElement = document.getElementById("horizontal")!;
    let promedioSeasons: HTMLElement = document.createElement("div");
    promedioSeasons.innerHTML=`<b>Seasons average: ${calcularPromedioSeries()}</b>`;
    casillaHorizontal.appendChild(promedioSeasons);
}

function mostrarSerie(serie:Serie):void{
    let casillaSerieAnterior: HTMLElement = document.getElementById("card-serie")!;
    let cartaSerie: HTMLElement = document.createElement("div");
    cartaSerie.id = "card-serie";
    cartaSerie.innerHTML = `<div class="card" style="display: table-cell;"">
        <img class="card-img-top" src="${serie.image}">
        <div class="card-body">
          <h5 class="card-title" >${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          </div>
          
          <div class="card-body">
          <a href="${serie.link}" class="card-link">${serie.link}</a>
          </div>
          </div>`
          casillaSerieAnterior.replaceWith(cartaSerie);
}


mostrarSeries();
//calcularPromedioSeries();
mostrarPromedioSeries();
//tsc -p .\tsconfig.json

for (let serie of series){
    let serieN: HTMLElement = document.getElementById(serie.name)!;
    console.log(serie.name);
    console.log(serieN.id);
    serieN.onclick = ()=>{mostrarSerie(encontrarSerieNombre(serieN.id))}
    
}

function encontrarSerieNombre(nombreSerie:string):Serie
{
    return series.filter(serie=>serie.name==nombreSerie)[0]
}
//mostrarSerie(series[0]);
//mostrarSerie(series[1]);

