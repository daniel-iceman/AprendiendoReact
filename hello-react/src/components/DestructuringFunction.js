import React from 'react'
/*El destructuring en function se hace por debajo de la función */

/* PASO 1- Se crea primero la función pero se le quita el parentesis a "props" */
const FunctionDestructuring = props => {
    /* PASO 2- Se pone "const" y entre llaves las props que seran destructuradas
    y usadas y estas se igualan a "props" */
    const {name, heroName} = props
     
    return (
        <div>
            <h2> 
                {/* Se colocan las props pero ya sin el "props.name*/}
                The props of {name} {heroName} are function destructuring.
            </h2>
        </div>
    )
}

export default FunctionDestructuring
            