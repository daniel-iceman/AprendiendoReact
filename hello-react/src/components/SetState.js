import React from 'react'


/* Aquí crearemos un "State".*/

/* PASO 1- Creamos una clase */
class Message extends React.Component{
    /* PASO 2- Creamos un constuctor, al cual le agregamos en "this.state = {}"
    el estado que queremos que tenga.  */
    constructor(props) {
        super(props)
        this.state = { 
            message: 'Welcome visitor'
        }
    }

    /* PASO 4- Definimos el metodo creado "changeMessage" 
    en este metodo llamamos al metodo "setState" el cual 
    aceptará un objeto que no será otra cosa sino el nuevo
    estado del componente */
    changeMessage() {
        this.setState({
            message: 'Thank your for subscribing'
        })
    }

    /* PASO 3- Retornamos dentro de la etiqueta de html el estado 
    de la variable "message".  Para esto el "return" abre parentesis
    ya que serán multiples lineas los que contendrá (mensaje y boton) 
    y deberá incluir una etiqueta "div" que contenga la información 
    ya que solo será un elemento el que se regresará */
    render(){
        return( 
            <div>
                <h1> {this.state.message} </h1>

                {/* PASO 3.1- Se agrega el atributo "onClick" y se agrega un "Handler" 
                (manipulador) con esta sintaxis "{() => this.changeMessage()}"*/}
                <button onClick={() => this.changeMessage()} >Subscribe</button>
            </div>
                
        ) 
    } 
}

export default Message