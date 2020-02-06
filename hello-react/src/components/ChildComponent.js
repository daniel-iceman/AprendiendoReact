//rfce
import React from 'react'

/* Este componente de función tendrá relación con el "ParentComponent.js" que es un
componente de clase */


/* En este componente añadimos "props" como parametro de la función ademas creamos 
un botón y con el metodo "onClick" llamamos a la "prop" "greetHandler" por medio 
de arrow function que fue creada en el componente "ParentComponent" y a est añadimos
como parametro una "prop" que para este ejemplo será la palabra "child" (podriamos usar
multiples parametros dentro) */
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
        </div>
    )
}

export default ChildComponent
