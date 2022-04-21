import { series } from "./data.js";
function mostrarSeries() {
    var seriesTbody = document.createElement("tbody");
    var seriesTable = document.getElementById("tabla-series");
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td style=\"color:blue\"><a href=\"#\" id=\"").concat(serie.name, "\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        console.log("se agrego la serie ".concat(serie.name));
    }
    seriesTable.appendChild(seriesTbody);
}
function calcularPromedioSeries() {
    var totalSeasons = 0;
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        totalSeasons += serie.seasons;
    }
    return totalSeasons / series.length;
}
function mostrarPromedioSeries() {
    var casillaHorizontal = document.getElementById("horizontal");
    var promedioSeasons = document.createElement("div");
    promedioSeasons.innerHTML = "<b>Seasons average: ".concat(calcularPromedioSeries(), "</b>");
    casillaHorizontal.appendChild(promedioSeasons);
}
function mostrarSerie(serie) {
    var casillaSerieAnterior = document.getElementById("card-serie");
    var cartaSerie = document.createElement("div");
    cartaSerie.id = "card-serie";
    cartaSerie.innerHTML = "<div class=\"card\" style=\"display: table-cell;\"\">\n        <img class=\"card-img-top\" src=\"".concat(serie.image, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\" >").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          </div>\n          \n          <div class=\"card-body\">\n          <a href=\"").concat(serie.link, "\" class=\"card-link\">").concat(serie.link, "</a>\n          </div>\n          </div>");
    casillaSerieAnterior.replaceWith(cartaSerie);
}
mostrarSeries();
//calcularPromedioSeries();
mostrarPromedioSeries();
var _loop_1 = function (serie) {
    var serieN = document.getElementById(serie.name);
    console.log(serie.name);
    console.log(serieN.id);
    serieN.onclick = function () { mostrarSerie(encontrarSerieNombre(serieN.id)); };
};
//tsc -p .\tsconfig.json
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    _loop_1(serie);
}
function encontrarSerieNombre(nombreSerie) {
    return series.filter(function (serie) { return serie.name == nombreSerie; })[0];
}
//mostrarSerie(series[0]);
//mostrarSerie(series[1]);
