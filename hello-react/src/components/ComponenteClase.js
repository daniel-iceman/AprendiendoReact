import React from 'react'

/* Asi se crea un componente de clase, a diferencia de los 
componentes de función las props en las clases requieren del
metodo "this".    En resumen las props se añaden a componentes
ya creados y les dan propiedades especificas y variadas generando
un contenido dinamico.   Las props son inmutables, es decir,
su valor no puede ser cambiado.
*/

class Welcome extends React.Component{
    render(){
        return( 
            <h1>Welcome {this.props.name} you´re {this.props.heroName} </h1>    
        )
    } 
}

export default Welcome