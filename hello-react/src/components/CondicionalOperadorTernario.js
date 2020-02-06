/*La ventaja del OPERADOR CONDICIONAL (TERNARIO) es que es
el único CONDICIONAL que puede ser usado dentro de JSX, esta
es la mejor forma y mas facil de crear condicionales.  */

//rce
import React, { Component } from 'react'

class ConditionalOperatorUserGreeting extends Component {

    // PASO 1- Creamos un constuctor
    //rconst
    constructor(props) {
        super(props)
        /* PASO 2- Creamos un estado llamado "isLoggedIn" con valor "false" */
        this.state = {
             isLoggedIn: true
        }
    }
    
    /* PASO 3- Se coloca un "return" que contendrá 3 "operadores"
    -El primer "operador" contendrá el "state" a manera de pregunta
     y este evaluará si el estado es "true" o "false".
    -El segundo "operador" contendrá el elemento que se retornará
     si el valor del "state" es positivo
    -El tercer "operador" contendrá el elemento que se retornará
     si el valor del "state" es negativo.
    Ente el segundo y tercer operador deberan haber ":" */
    render() {
        return (
            this.state.isLoggedIn ?
            <div>Welcome Daniel to Conditional Operator</div> :
            <div>Welcome Guest to Conditional Operator</div>
        )
    }        
}
    
export default ConditionalOperatorUserGreeting
