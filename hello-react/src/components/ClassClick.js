//rce
import React, { Component } from 'react'

/*Aqui veremos como se genera un "Handler" en una clase
que tiene un botón y al ser presionado el "Handler" deberá
tomar ese evento para realizar una acción  */

class ClassClick extends Component {
    /*PASO 3- Se crea la función (acción) que desencadenará el "onClick" */
    clickHandler () {
        console.log("Apretaste un botón")
    }

    render() {
        return (
            <div>
                {/* PASO 1- Se agrega metodo onClick
                PASO 2- Se coloca dentro de llaves el "handler", pero
                a diferencia de la funciones, en las clases el acceso
                a los metodos es usando la palabra clave "this"  */}
                <button onClick={this.clickHandler}>Click me ClassClick</button>
            </div>
        )
    }
}

export default ClassClick
