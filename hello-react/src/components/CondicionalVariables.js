//rce
import React, { Component } from 'react'

class CondicionalVariablesUserGreeting extends Component {

    // PASO 1- Creamos un constuctor
    //rconst
    constructor(props) {
        super(props)
        /* PASO 2- Creamos un estado llamado "isLoggedIn" con valor "false" */
        this.state = {
             isLoggedIn: true
        }
    }
    
    /* PASO 3- Creamos variable "message" dentro del "render" la cual almacenará
    el elemento que se renderizará */
    render() {
        let message
        /* PASO 4- A la condicional if le agregamos la variable "message" y
        esta a su vez tendrá como valor la etiqueta con un mensaje si fuera
        "true" o "false" el valor de "isLoggedIn", este mensaje irá dentro de
        una etiqueta de html */
        if (this.state.isLoggedIn) {
            message = <div>Welcome Daniel to Variables in IF-ELSE</div>
        } else {
            message = <div>Welcome Guest to Variables in IF-ELSE</div>
        }

    /* PASO 4- Se agrega un "return" que retornara la misma etiqueta agregada
    dentro del "if" pero con la variable creada dentro de llaves */
    return <div>{message}</div>
    }        
}

export default CondicionalVariablesUserGreeting
       

            
           

    

