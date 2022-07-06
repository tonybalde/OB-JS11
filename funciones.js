//  Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function myFunction(){
    return true;
}

console.log(myFunction());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout(function(){
    console.log("Hola soy una promesa")
}, 5000)

// - Una función generadora de índices pares automáticos

function* generarId(){
    let id = 0;
    while (true){
        id += 2
        if (id === 10){
            return id
        }
    }   yield id
}

const gen = generarId();

console.log(gen.next().value);