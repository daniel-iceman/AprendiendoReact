//rce
import React, { Component } from 'react'

class If_Else_UserGreeting extends Component {

    // PASO 1- Creamos un constuctor
    //rconst
    constructor(props) {
        super(props)
        /* PASO 2- Creamos un estado llamado "isLoggedIn" con valor "false" */
        this.state = {
             isLoggedIn: true
        }
    }
    
    /* PASO 3- Abrimos parentesis al "return" ya que contendrá varios elementos,
    e ingresamos un "div" que a su vez contendrá 2 "div" cada uno de ellos con 
    2 mensajes.   Lo que queremos es que se renderize un mensaje dependiedo
    del estado "isLoggedIn", si estamos "Logged in" aparecerá el mensaje "Welcome
    Daniel" y si no el mensaje "Welcome Guest"  */
    render() {

        /* PASO 4- Dentro del render colocamos la condicional "if".   Debemos recordar
        que toda declaración dentro de un "if" la considera "true" de inicio.   Dentro 
        de esta condicional se dará una acción a realizar en caso de que esa condición
        se cumpla. */
        if (this.state.isLoggedIn) {
            return <div>Welcome Daniel to simple IF-ELSE</div>
        } else {
            return <div>Welcome Gues to simple IF-ELSEt</div>
        }
   
    }
}

export default If_Else_UserGreeting
