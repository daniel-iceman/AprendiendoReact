//rce
import React, { Component } from 'react'
/* PASO 5- Se importa el metodo "ChildComponent" */
import ChildComponent from './ChildComponent'

/* Este proceso sirve para pasar parametros del componente "hijo" al componente
"padre" es decir es la forma en la que se pasan "metodos" como "props" en los 
compoentes de react. */

/* Este componente de clase tendrá relación con el "ChildComponent.js" que es un
componente de función */

class ParentComponent extends Component {

    //rconst
    constructor(props) {
        super(props)
        /* PASO 1- Dentro del constructor crearemos un estado "parentName" con 
        valor "Parent" */
        this.state = {
            parentName: 'Parent'
             
        }
        /*PASO 3- En el constructor creamos el "bind" para linkearlo con el
        metodo "greetParent" */
        this.greetParent = this.greetParent.bind(this)
    }

    /*PASO 2- Definimos un metodo (función) "greetParent" que regresará
    un alert con el "parentName" que esta en el estado (state) por medio
    de una concatenación con la estructura de ECMA6 `${}`.   A esta función
    le agregaremos como parametro "childName" y este parametro de la función
    lo concatenamos con el "state" de parentName. */
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    

    render() {
        /* PASO 4- Agregamos el component "ChildComponent" en el render y a este
        le agregamos una prop "greetHandler" que creará una referencia del componente
        "ChildComponent" al componente "ParentComponent" especificamente al metodo
        "greetParent".   El handler "greetHandler" estará definido en el componente
        "ChildComponent" */
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

