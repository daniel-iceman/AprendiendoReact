//rfce
import React from 'react'

// PASO 1- Creamos un objeto (tipo archvio json) el cual recorreremos.
function ObjectListIndex() {
    const persons = [
        {
            id: 1,
            name: 'Daniel',
            age: 47,
            movie: 'Saving Private Ryan'
        },
        {
            id: 2,
            name: 'Valeria',
            age: 14,
            movie: 'Les Miserables'
        },
        {
            id: 3,
            name: 'Patricio',
            age: 10,
            movie: 'StarWars'
        },

    ]

    /* PASO 2- Creamos una constante "personList" que contendrá el metodo "MAP"
    que renderizará cada una de las personas el nombre, la edad y su pelicula favorita
    dentro de una etiqueta "h2".    Aquí "family" representa el objeto en la lista que 
    que requiere el "operador punto" para acceder a las propiedades del "objeto persons" */
    const personList = persons.map(family =>( 
        <h2>
            I am {family.name}.  I am {family.age}.  My favorit movie is {family.movie} 
        </h2>
    ))
    
    /* PASO 3- Retornamos dentro del "div" la constante "personList" */
    return (
        <div>
            {personList}
        </div>
    )
}

export default ObjectListIndex
