//rfce
import React from 'react'

/* PASO 1- Para crear propiedades de componentes directamente en el
archivo de js sin usarlas en un archivo de CSS debemos crear
un "objeto" cuyos elementos (keys) sean las propiedades de
css pero estas deberán tener una sintaxis de "camel case"
seguidas de su valor como un "sting" es decir entre comillas. 
Cada "key" deberá estar separado por una coma.*/
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InLineCSS() {
    return (
        <div>
            {/* PASO 2- Agregar dentro de el componente el atributo "style" 
            el cual será igual al objeto "heading" creado arriba. */}
            <h1 style={heading} >In Line CSS</h1>
        </div>
    )
}

export default InLineCSS
