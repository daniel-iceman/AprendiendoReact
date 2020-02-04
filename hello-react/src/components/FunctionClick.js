// rfce
import React from 'react'

/*Aqui veremos como se genera un "Handler" en una función
que tiene un botón y al ser presionado el "Handler" deberá
tomar ese evento para realizar una acción */

function FunctionClick() {
    /*PASO 3- Se crea la función (acción) que desencadenará el "onClick" */
    function clickHandler() {
        console.log("Button Clicked")
    }

    return (
        <div>
            {/* PASO 1- agregar el metodo "onClick" 
            PASO 2- Se agrega como valor una función (dentro de llaves)
            que será la que contendrá la acción a desarrollar.
            Es importante que la función este entre llaves y no contenga
            parentesis "clickHandler()" ya que si los contiene esto se 
            convertirá en "una function call" y lo que queremos es que el
            "Handler" realize una función, no que la llames aunque no sea
            presionado*/}
            <button onClick = {clickHandler}>Click FunctionClick</button>
            
        </div>
    )
}

export default FunctionClick

