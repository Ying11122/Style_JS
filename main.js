// 1- IMAGENES EDADES
// Tienes un input numérico donde se pregunta la edad.
// - si es entre 0 y 35 años, poner un texto del tipo "eres un chaval!" y una imagen de alguien joven.
// - si es entre 36 y 65 años, poner texto del tipo "pero si estás en la crema de la vida!", y una imagen de alguien de mediana edad
// - si es de más de 65 años, texto del tipo "felicidades, la sabiduria viene con el tiempo", y una imagen de alguien más mayor
// Puedes cambiar además del texto y la imagen, el color de fondo de la página, el color de los textos, y hacer desaparecer el input (y el botón).

const edad = document.getElementById ("edad");
const imagenEdad = document.getElementById ("foto-edad");
const mensajeSecreto = document.getElementById ("mensajeSecreto");
const pelota = document.getElementById ("pelota");

let pregunta = parseInt(prompt ("¿Cuántos años tienes?"));

if (pregunta < 35){
    edad.innerHTML= ("Eres un chaval!");
    imagenEdad.src = "Img/joven.webp";
} else if (pregunta >= 35 && pregunta < 65){
    edad.innerHTML= ("Estás en la crema de la vida!");
    imagenEdad.src = "Img/adulto.webp";
} else {
    edad.innerHTML= ("Felicidades, la sabiduría viene con el tiempo");
    imagenEdad.src = "Img/anciano.webp";
}


// 2- CLASSLIST
// Mensaje secreto: Tienes un mensaje de texto con el mismo color que el color del div de fondo (por lo tanto es invisible).
// Y un botón que dice "descubre el mensaje!".
// Crea una función que al clickar sobre el botón aplique al menos dos classList sobre el texto: clase color y clase tamaño de texto, que descubran el texto.
// También puedes a la vez quitar el estilo del div de fondo mediante classList.remove()

function textoAparecer (){ 
    mensajeSecreto.classList.add("colorBlanco");
    mensajeSecreto.classList.add("size");
}

function textoEsconder (){ 
    mensajeSecreto.classList.remove("colorBlanco");
}

// 3- @keyframes
// Sobre una animación que ya tengas, o sobre una nueva, da la opción de "parar" y arrancar" la animación desde dos botones. Ejemplo, animación pelota o animación anuncio, o una nueva animación  que crees ahora.

function animacion (){
    pelota.style.animationPlayState = "running";
}

function animacionNo (){
    pelota.style.animationPlayState = "paused"
}