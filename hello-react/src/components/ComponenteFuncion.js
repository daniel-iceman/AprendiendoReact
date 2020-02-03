/* Aquí se creará un elemento (tag) o etiqueta <h1> dentro del
<div> que ya existe en "App.js"  Cuando solo se requiere crear un
elemento resulta util, pero cuando se requieren varios es mejor
usar el metodo que esta en el archivo "AgregandoHijos.js" */

import React from 'react'

/* Esta es la nueva versión de JSX de una función, así se crea
un componente de Función al cual se le agregarán las "props"
*/

const Greet = (props) => {
    console.log(props)
    // Aquí estará retornando el tag <h1> con el metodo {props.name}
    // que tomará la variable "name" creada dentro de la etiqueta
    // "FuncionDeSaludo" en el archivo "App.js".   Gracias a las props
    // podremos pasarle cualquier tipo de datos que querramos al componente 
    return (
        <div>
            <h1> 
                Hello {props.name} is {props.heroName} 
            </h1>
            {props.children}
            {/*Aqui agregamos la asignación de las props.children de los superheroes, que 
            no son otra cosa sino una etiqueta creada dentro de la etiqueta
            de "FuncionDeSaludo" */}
        </div>
    )
}
export default Greet




// Aqui usaremos una condicional if creando una nueva función pero usando el mismo objeto
// contenido en la constante "name" del archivo "Constantes".   
// Si no contara con la propiedad (user) retornará el mensaje "Hello Stranger"

// Le pasamos la función que queremos ejecutar, si dentro del parentesis no ponemos ningun
// parametro entonces aparecerá el mensaje "Hello Stranger", de lo contrario si colocamos
// como parametro la constante "user" desplegará el objeto "user"
/*
function Greet(name) {
    if(name){
        return <h1>Hello {getName(name)}</h1>
    }
    return <h1>Hello Stranger</h1>
}
*/