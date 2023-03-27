const columnaA = [
    "Nosotros debemos pensar que somos una de las hojas de un arbol, y el arbol es toda la humanidad. No podemos vivir los unos sin los otros, sin el árbol.     -Pau Casals",
    "La vida es una obra teatral que no importa cuanto haya durado, sino lo bien que haya sido representada.   -Séneca",
    "Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida.  -Arthur Schnitzler",
    "Recuerda que la felicidad no depende en quién eres o qué tienes; depende únicamente en lo que piensas.  -Dale Carnegie",
    "Lo que doy, me lo doy. Lo que no doy me lo quito. Nada para mí que no sea para otros.  -Alejandro  Jodorowsky",
    "No hay hombre tan cobarde a quien el amor no haga valiente y transforme en héroe.  -Platón.",
    "No puedo enseñar nada a nadie. Solo puedo hacerles pensar.  - Sócrates.",
    "Vivir es nacer a cada instante.   -Erich Fromm. ",
    "¿Quieres ser rico? Pues no te afanes en aumentar tus bienes sino en disminuir tu codicia.  - Epicuro.",
    "La buena conciencia es la mejor almohada para dormir.   -Sócrates.",

]; 

function generaFrase() {

    const posicionA = Math.floor(Math.random()*columnaA.length);
    
    
    const frase = `${columnaA[posicionA]}`
    
    return frase;
    }
    
    console.log(generaFrase());
    
    
    function colocaFrase() {
    document.getElementById("Frase").innerHTML = generaFrase();
    }
    
    
    colocaFrase();
