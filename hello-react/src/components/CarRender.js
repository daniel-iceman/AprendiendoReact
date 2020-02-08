//rfce
import React from 'react'

/* Agregamos como "prop" (en forma de "destructing") dentro de llaves al objeto 
"garage" creado en el modulo "CarListRender" */
function CarRender({garage}) {
    return (
        <div>
            {/* Se agrega una etiqueta "<h2>" que contiene al objeto (diccionario) 
            "garage" que se encuentra definido en el componente "CarListRender" el
            cual llama a cada uno de los elementos que contiene el objeto por medio
            del "operador punto" */}
            <h2>
                The {garage.trade} {garage.model} year {garage.year} become in {garage.color}
            </h2>
        </div>
    )
}

export default CarRender
