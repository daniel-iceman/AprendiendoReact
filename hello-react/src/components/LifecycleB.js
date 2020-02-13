//rce
import React, { Component } from 'react'

// MOUNTING y UPDATING LIFECYCLE
// HIJO

class LifecycleB extends Component {

// ESTE SERÁ EL ORDEN EN EL QUE LOS METODOS SE EJECUTARAN (podran ser
// verificados mediante los console.log)
    //rconst
    /* MOUNTING Y UPDATING PASO 1- Creamos un constructor y agregamos en el estado una propiedad
    "name" inicializada a "Daniel".   Dentro del constructor agregamos un "console.log" que
    escriba "LifecycleB constructor"*/
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Daniel'
             
        }

        console.log('LifecycleB constructor')
    }

    /* MOUNTING Y UPDATING PASO 2- El segundo metodo que tenemos es el "static getDerivedStateFromProps" 
    que acepta como parametros "props" y "state" y retorna un estado o null.  Para
    evaluar el orden de ejecución agregamos otro console.log */
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    /* MOUNTING PASO 4- Por último creamos un metodo "componentDidMount" y dentro de el un
    console.log para evaluar tambien el orden de ejecución.*/
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

     /* UPDATING PASO 4 - Justo antes del render se agrega el componente del "updating" y 
    es importante no olvidar agregarle un "return true"  */
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    /* UPDATING PASO 5 - Agregamos tambien el componente "getSnapshotBeforeUpdate" */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    /* UPDATING PASO 6 - Finalmente agregamos el metodo  "componentDidUpdate" */
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    
    /* MOUNTING Y UPDATING PASO 3- Agregamos un texto a la etiqueta <div> e igualmente agregamos un
    console.log para evaluar orden de ejecución */
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B                
            </div>
        )
    }
}

export default LifecycleB