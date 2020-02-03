import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    /* El metodo "setState" puede tener 2 parametros
    - El primer parametro es el estado del objeto
    - El segundo parametro es la función "call back" para que
    los cambios tambien se generen en la consola sincronizados con
    el DOM y esto se hace por medio de una "arrow function" */
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value', this.state.count)}
        ) 
    }

    render() {
        return (
            <div>
                <div> Count - {this.state.count} </div>
                <button onClick={() => this.increment()} >Increment</button>
            </div>
        )
    }
}

export default Counter
