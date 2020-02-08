//rfce
import React from 'react'
import './Stylesheet.css'

/* Aquí agregamos un estilo al "h1" por medio de un "className".
Si agregamos "props" al componente y estos los agregamos en el 
componente <Stylesheet> que está en "App.js" por medio de una 
función podemos activar o desactivar el estilo.  */

/* PASO 1- Agregamos el "props" como parametro de la función */

function Stylesheet(props) {
    /* PASO 2- Creamos una condicional donde "changeColor" será la variable
    condicionada.   Siguiendo la sintaxis del "Condicional Operador ternario",
    la primera línea contendrá la pregunta, la segunda linea lo que se rendrizará
    si esta fuese positiva y la tercer líne lo que se renderizará si fuese negativo.
    Debemos visualizar que "props" contiene el "true" o "false" que esta indicado
    en el componente "App.js" y "primary" es la etiqueta que contiene los estilos
    en CSS. */
    let changeColor = props.primary ?   // primary es true o false?
                        'primary' :     // Si es "true" contendrá la etiqueta "primary"
                        ''              // Si es "false" estará vacia por lo tanto sin edición de css.
    
    /* PASO 3- Como valor de "className" agregamos a la variable "changeColor" que 
    contendrá "primary" si la "prop" de "App.js" fuese "true" 
    o nada si la "prop" de "App.js" fuese "false" */                    
    return (
        <div>
            <h1 className={changeColor} >Stylesheet</h1> 
            {/* En este caso ademas de agregar la variable "changeColor"
            se agrega otra etiqueta creada en css que define el tamaño, 
            la sintaxis será todo dentro de llaves y entre comillas invertidas
            se agrega signo de pesos y entre llaves la variable y depues la
            etiqueta de css. */}
            <h4 className={`${changeColor} font-xl`} >y concatenación </h4>
        </div>
    )
}

export default Stylesheet


