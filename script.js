function sugerirLugarComida() {
    var comida = document.getElementById("inputComida").value.toLowerCase();

    if(comida === "hamburguesa" || comida === "hamburguesas"){
        document.getElementById("resultado").textContent = "Te recomiendo ir a: Flour Store, Humauaca 3853"
    } else if (comida === "helado" || comida === "helados"){
        document.getElementById("resultado").textContent = "Podrías ir a: Obrador Florida, en Soler 5063" 
    } else if (comida === "pasta" || comida === "pastas"){
        document.getElementById("resultado").textContent = "Podrías ir a: Massey Familia, en Cerviño 3883"  
    } else if (comida === "tostadas" || comida === "desayuno" || comida === "café"){
        document.getElementById("resultado").textContent = "Podrías ir a: Blanca Deco Café, en Sinclair 3163" 
    } else if (comida === "vegetariano" || comida === "veggie"){
        document.getElementById("resultado").textContent = "Te recomiendo: Artemisia, Costa Rica 5893"
    } else if (comida === "milanesa" || comida === "milanesas"){
        document.getElementById("resultado").textContent = "Te recomiendo: Cantina La Favorita, Honduras 5288"
    } else {
        document.getElementById("resultado").textContent = "Por el momento no tenemos sugerencias para esa comida, pero vamos a tener en cuenta tu pedido para seguir mejorando :)"
    }
}

function suscribirse() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;

  if (nombre === "" || correo === "") {
    alert("Debe completar todos los datos para poder suscribirse.")
  } else if (!correo.includes("@")) {
    alert("Ingrese una dirección de correo válida.")
  } else {
    alert("Gracias por suscribirse! :)")
  }
}
