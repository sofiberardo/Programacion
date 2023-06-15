function sugerirLugarComida() {
    var comida = prompt("¿Que te gustaría comer?");

    if(comida === "hamburguesas" || comida === "Hamburguesas"){
        return "Te recomiendo ir a Flour Store, es una hamburguesería muy buena que queda en la calle Humauaca 3853"
    } else if (comida === "helado" || comida === "Helado"){
        return "Podrías ir a Obrador Florida, es una heladería artesanal que queda en Palermo, en Soler 5063"   
    } else if (comida === "milanesa" || comida === "Milanesa"){
        return "Te recomiendo Cantina La Favorita, tiene altas milanesas. Queda en Honduras 5288"
    } else {
        return "Por el momento no tenemos sugerencias para esa comida, pero vamos a tener en cuenta tu pedido para seguir mejorando :)"
    }
}
var sugerencia = sugerirLugarComida();
console.log(sugerencia);
