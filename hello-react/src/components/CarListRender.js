// rfce
import React from 'react'
import CarRender from './CarRender'

/* La recomendación al momento de hacer listas de acuerdo a JSX es separar
los componentes, por un lado renderizar la lista de elementos y por otro
renderizar los elementos (en otro modulo) */

function CarListRender() {

    const cars = [
        {
            id: 1,
            trade: 'Ford',
            model: 'Mustang',
            year: 1972,
            color: 'Red',
        },
        {
            id: 2,
            trade: 'BMW',
            model: 'X6',
            year: 2019,
            color: 'Blue',
        },
        {
            id: 3,
            trade: 'MAZDA',
            model: '3',
            year: 2020,
            color: 'Gray',
        },
    ]


    /* El metodo "MAP" del componente de lista "carList" incluye
    al componente "<CarRender>" (que no es otra cosa sino el crear
    una etiqueta del modulo de "CarRender.js"), "garage" como parametro
    que a su vez pasa como una "prop" al componente "CarRender"  */
    /* Debemos crear una "key" (llave) que identifique como único a cada
    elemento de la lista, y eso lo hacemos dentro del componente <CarRender>,
    la sintaxis será "key={garage.id}"; se puede usar el "id" o se podría
    usar cualquier otro elemento de la lista como "model" por ejemplo.  
    Las "key´s" sirven para identificar que elementos de la lista han cambiado,
    se han añadido o ha sido eliminados y tiene un papel importantisimo en las
    actualizaciones del "handling" de la UI.
     */
    const carsList = cars.map( garage => <CarRender key={garage.id} garage = {garage} /> )

    return (
        <div>
            {carsList}
        </div>
    )
}

export default CarListRender
