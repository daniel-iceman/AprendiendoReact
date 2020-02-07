//rfce
import React from 'react'

// Aqui crearemos una lista contenida en un "array"

/* PASO 1- Creamos una función y dentro de ella cramos una constante
con un array */
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']

    /* PASO 2- Creamos una constante que contenga el metodo "MAP"
    de javascript dentro de llaves.  El metodo map acepta
    una función como argumento (podemos usar arrow function).  
    La sintaxis de la arrow function será "el parametro seguido
    de la flecha y por ultimo el cuerpo de la funcion" que realizará
    la transformación.  Lo que buscamos en esta función es que por
    cada nombre retornado se genere una etiqueta de html.
    Como parametro usaremos la palabra "alterego" (es importante
    siempre elegir una palabra reelevante al código) */
    const nameList = names.map(alterego => <h2>{alterego}</h2>)
    
    /* PASO 3 se retorna la etiqueta "div" que contendrá la
    constante "nameList" que a su vez representa la función. */
    return <div>{nameList}</div>
    
}

export default NameList
