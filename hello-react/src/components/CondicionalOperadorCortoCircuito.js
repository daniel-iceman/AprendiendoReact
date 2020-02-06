/*La ventaja del OPERADOR CONDICIONAL (TERNARIO) es que es
el único CONDICIONAL que puede ser usado dentro de JSX, esta
es la mejor forma y mas facil de crear condicionales.  */

//rce
import React, { Component } from 'react'

class ShortCircuitOperatorUserGreeting extends Component {

    // PASO 1- Creamos un constuctor
    //rconst
    constructor(props) {
        super(props)
        /* PASO 2- Creamos un estado llamado "isLoggedIn" con valor "false" */
        this.state = {
             isLoggedIn: true
        }
    }
    
    /* PASO 3- Se coloca un "return" que retorna el la etiqueta de
    html si el estado es positivo, si este fues negativo no retorna
    nada, es decir se queda en blanco.  Para esto se colocan 2 "&"
    entre el llamado del estado y la etiqueta a renderizar. */
    render() {
        return this.state.isLoggedIn && <div>Welcome Daniel to Short Circuit Conditional</div>
    }        
}
    
export default ShortCircuitOperatorUserGreeting
                