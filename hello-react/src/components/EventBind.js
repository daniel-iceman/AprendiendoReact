import React, { Component } from 'react'

class EventBind extends Component {

    //rconst
    /* PASO 1- Se crea un constuctor (estado) y se agrega un mensaje
    "Hello" */
   constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }  
    } 
    
    /* PASO 4- Se crea la función "clickHandler" con arrow function y dentro
    de esta se coloca el cambio de estado con "this.setState" y el nuevo
    mensaje.   Este metodo realizó el trabajo de bind sin que este tuviera
    que ser escrito. */
    clickHandler = () => {
        this.setState ({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                {/* PASO 2- Se agrega una etiqueta donde se ingresa el 
                resultado del estado con {this.state.message}  */}
                <div>{this.state.message} </div>

                {/* PASO 3- Se añade un boton con un onClick que tendrá 
                un handler (como en el archivo "ClassClick") */}
                <button onClick={this.clickHandler}>Click Bind</button>
            </div>
        )
    }
   }

export default EventBind


