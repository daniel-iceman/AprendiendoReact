//rce
import React, { Component } from 'react'

class Form extends Component {

    /* PASO 2- Debemos crear un "componente" de estado que controle el
    "valor" del elemento "input" */
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            /* PASO 3- Creamos una nueva propiedad de estado llamada
            "username" inicializada con un string vacio */
             username: '',

             //Podemos crar otro estado (state)
             comments: '',

             /* Asignamos el estado de "value" del componente "select" creando
             la variable "topic" que contendrá el estado */
             topic: 'react' 
        }
    }
    
    /* PASO 6- Ahora definimos el metodo "handler" como una propiedad de clase 
    (cuando asignamos un handler a un "onChange" "el evento" de este pasa 
    automaticamente como parametro al handler "event").   El evento se captura
    con esta sintaxis siempre "event.target.value", esto quiere decir que el 
    estado "username" ahora tendrá los datos que el usuario ingreso y que fueron
    captado por el "onChange" y el handler "handleUsernameChange" y asignado al
    estado "username" por medio del "event.target.value" */
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value

        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value

        })
    }

    /* PASO 10- Definimos el handler que actualizará el estado del
    componente "select".   */
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
        
  
    /* PASO 13- Definimos el handler "submit", en este caso se programa 
    una ventana emergente que arroje los resultados agregados.  
    El "event.preventDefault()" se encargará de que al apretar el submit
    y que la información se actualizada no se refresquen los inputs (no
    se borre la información anotada) */
    handleSubmit = (event) => {
        alert (`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
            

    render() {

        /* Aquí podemos hacer "destructing" para evitar escribir el "this.state"
        y solo anotar la palabra que contiene el esado, ej.
        const { username, comments, topic } = this.state */

        /* PASO 1- Se crea un form con etiquetas de html (label e input) */
        return (
            /* PASO 12- Creamos un handler del evento "onSubmit" del boton
            como parametro del <form> */
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Username</label>

                    {/* PASO 4- Ahora debemos asignar al "input" el valor creado
                    en el estado (state property) */}
                    {/* PASO 5- Ahora creamos un "onChange event handler" para que
                    registre el cambio de lo que introducimos en el input por medio
                    de un handler (el valor introducido lo inventamos nosotros) */}
                    <input type='text' 
                        value={this.state.username}  
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.handleCommentChange}
                    ></textarea>
                </div>

                {/*Aquí veremos como funciona el "select" tag */}
                {/* PASO 7- Creamos el tag "select", dentro de este ingresamos
                3 tag "option" con 3 titulos diferentes, un metodo "value" y sus
                valores en minusculas. */}
                <div>
                    <label>Topic</label>
                    {/* PASO 8- Agregamos el atributo "value" que llamará a
                    la variable "topic" creada en el constructor. */}
                    {/* PASO 9 gregar el onChange handler que actualizará
                    el estado del componente "select" */}
                    <select value={this.state.topic} onChange={this.handleTopicChange} >
                        <option value='react' >React</option>
                        <option value='angular' >Angular</option>
                        <option value='vue' >Vue</option>
                    </select>
                </div>

                {/* PASO 11- Creamos un botón "submit" que enviará los datos
                a la base de datos. */}
                <div>
                    <button type='submit' >Submit</button>
                </div>
                    
            </form>
            
        )
    }
}

export default Form
