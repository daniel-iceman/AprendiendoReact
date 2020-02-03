/* Aqui creamos un componente de función que añadirá un elemento NUEVO
en el DOM con JSX.    Este <div> creado será independiente del <div>
que contiene los demas elementos de la "App.js" */

import React from 'react'

/* El método "React.createElement" acepta 3 parametros
-El primero será el "Tag" que se desea crear (ej <div>)
-El segundo serán propiedades especiales como "id" o "className" del <div>
-El tercer parametro sera el contenido del Tag creado o bien 
el"Tag" hijo (por ejemplo <h1>) y este deberá tener la misma
estructura que el padre con "React.createElement" y sus 3
parametros (el segundo serán las propiedades del <h1>).
 */
const Hello = () => {
    return React.createElement(
        'div',
        {id: 'helloId', className: 'helloClass'},
        React.createElement('h1', 'null', 'Hello Daniel you´re a son')

    )
}

export default Hello