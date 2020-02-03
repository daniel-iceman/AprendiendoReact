import React from 'react'

/* El "destructuring" en las clases se hace "dentro del render" */

/* PASO 1- Se crea primero la clase */
class ClassDestructuring extends React.Component{
    render(){
        /*Dentro del render se crea el destructing, y este se iguala 
        a "this.props*/
        const {name, heroName} = this.props

        /*Tambien se puede hacer "destructing" en state si los tuviera 
        de esta forma: */
        // const {state1, state2} = this.state

        return( 
            <h2>
                The props of {name} {heroName} are class destructing.
            </h2>    
        )
    } 
}

export default ClassDestructuring