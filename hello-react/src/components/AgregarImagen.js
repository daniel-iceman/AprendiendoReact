// 4.
// Aqui añadimos la imagen que agregamos en el objeto "user" al DOM
// Una de las propiedades de JSX es que podemos colocar una sola etiqueta de html
// y cerrarla si es que solo contendrá un "id", "clase" o "fuente (source)".
/*
const element4 = <img src={user.avatar}/>
const container4 = document.getElementById('imagenHtml')
*/
import React from 'react'

const Photo = (props) => {
    console.log(props)
    // Aquí estará retornando el tag <h1> con el metodo {props.name}
    // que tomará la variable "name" creada dentro de la etiqueta
    // "FuncionDeSaludo" en el archivo "App.js".   Gracias a las props
    // podremos pasarle cualquier tipo de datos que querramos al componente 
    return (
        <div>
            <img src={props.fuente} /> 
                
            {/*Aqui agregamos la asignación de las props.children de los superheroes, que 
            no son otra cosa sino una etiqueta creada dentro de la etiqueta
            de "FuncionDeSaludo" */}
        </div>
    )
}
export default Photo