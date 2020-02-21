import React, { Component } from 'react'

/* AQUI SE EXPLICA COMO SE CREA UN STATE DE INICIO DE UN ELEMENTO, UN SET STATE QUE CAMBIA
 EL ESTADO DEL ELEMENTO Y UN "LLAMADOR" (HANDLE) QUE EJECUTA LA FUNCIÓN.   TAMBIEN COMO 
 CREAR UNA CONDICIONAL EN BASE AL CAMBIO DEL STATE  */

class Boton extends Component {
    /* State es una palabra reservada y es un inicializador, dentro de el se ingresa
    la variable que contendrá el valor inicial y el cual será modificado por "setState"*/
    state = {   
        contador : 0
    }
    /* El handleClick es la variable que se crea para el "handle" que captará cuando el 
    botón sea clickeado y entonces ejecutará la función que contiene.*/
    handleClick = () => {
        /* El "this.setState" es contenido dentro del "handler" y responde al llamado 
        de este.  Su trabajo será cambiar el valor de la variable contenida en "state" */
        this.setState({
            contador : this.state.contador + 1
        })
    }

    render() {
        /* Dentro del render se crea una constante, en este caso la constante contiene
        al elemento creado en "state" y este tiene como valor "this.state" esto quiere
        decir que "contador es el estado */
        const {contador} = this.state;

        /* (opcional) Aquí creamos una condicional con una constante a la cual nombramos 
        "esDiez" la cual tendra como valor que la constante "contador" sea identica a "10" */
        const esDiez = contador === 10;

        return (
            <div>
                {/* Aquí añadimos en el dom una etiqueta <h1> que contendra un texto y entre 
                llaves la constante "contador" (se ingresa entre llaves porque viene de un
                elemento de javascript).  Debemos recalcar que "{contador}" contiene el 
                "state". */}
                <h1>Contador Actual: {contador} </h1>

                {/* Aquí creamos un boton, del "tipo boton" y con un metodo "onClick" que
                será el que llame al "handler" por medio de "{this.handleClick}" */}
                <button type="button" onClick= {this.handleClick}  >Click</button>

                {/* Aqui ejecutamos el resultado de la condicional creada arriba, donde
                decimos "Cuando se cumpla 'esDiez' entonces (&&):
                1- envia un mensaje de alerta que diga 'Es 10' */}
                {esDiez && alert("Es 10")}

                {/* 2- Crea en el dom una etiqueta de parrafo que contenga 'Es 10'" */}
                {esDiez && <p style= {{color:"black"}} >Es 10</p>}
            </div>
        )
    }
}

export default Boton

