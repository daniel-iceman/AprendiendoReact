import React, { Component } from 'react'

class CounterOf5 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    /* El metodo "setState" puede tener 2 parametros
    - Como primer parametro incluimos en el estado del objeto
    el parametro "prevState" y como acción de la función en la 
    variable "count" la suma de "prevState" + 1.
    Cuando querramos actualizar un estado en base al estado previo,
    y que este se deba actualizar varias veces no usaremos el metodo 
    "this.state" sino "prevState"
    - Como segundo parametro usaremos las "props" estas llamarán al
    valor añadido en la variable addValue.
     */
    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        })) 
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
        
    /*El boton debe llamar a la función "incrementFive" no a la
    función "increment", esta ultima lo que hará será usar el estado
    previo al cual se sumará el resultado de la función "incrementFive"
    que fué el estado previo. */
    render() {
        return (
            <div>
                <div> Count - {this.state.count} </div>
                <button onClick={() => this.incrementFive()} >Increment of 5</button>
            </div>
        )
    }
}

export default CounterOf5