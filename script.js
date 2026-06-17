const btnConoceme = document.getElementById("btnConoceme");
const curiosidades = document.getElementById("curiosidades")
const btnSaludo = document.getElementById("btnSaludo");
const tituloHero = document.getElementById("tituloHero");
const btnTema = document.getElementById("btnTema");

let contadorSaludos = 0;

btnSaludo.addEventListener("click", function (){
    contadorSaludos = contadorSaludos + 1;
    if (contadorSaludos % 3 == 1) {
        tituloHero.textContent = "¡Hola! soy Lucía";
    }

    else if (contadorSaludos % 3 == 2) {
        tituloHero.textContent = "Encantada de conocerte";
    
    } else {
        tituloHero.innerHTML ="Hola, soy <span ='hero__title--accent'<Lucía</span>";


  }
  
});
  btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-b");
    const temaAlternativoActivo = document.body.classList.contains("tema-b");
     if (temaAlternativoActivo) {
    btnTema.textContent = "☀️";  
  } else {
    btnTema.textContent = "🌙";
  }
});

let contadorConoceme = 0;
btnConoceme.addEventListener ("click", function (){
    contadorConoceme = contadorConoceme +1;
    if (contadorConoceme % 3 == 1) {
        curiosidades.textContent = "Me gusta escuchar música mientras programo";
    }

    else if ( contadorConoceme % 3 == 2) {
        curiosidades.textContent = "Me gusta pintar";
    
    } else {
        curiosidades.textContent ="Fui a un concierto de Lady Gaga"
    }

});




