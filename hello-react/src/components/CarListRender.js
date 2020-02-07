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
            model: 'Mustang',
            year: 1972,
            color: 'White'
        },
        {
            id: 2,
            model: 'Astra',
            year: 2004,
            color: 'Dark Blue'
        },
        {
            id: 3,
            model: 'Sportage',
            year: 2021,
            color: 'Dark Grey'
        },

    ]

    /* El metodo "MAP" del componente de lista "carList" incluye
    al componente "<CarRender>" (que no es otra cosa sino el crear
    una etiqueta del modulo de "CarRender.js"), "garage" como parametro
    que a su vez pasa como una "prop" al componente "CarRender"  */
    const carsList = cars.map( garage => <CarRender garage = {garage} /> )

    return (
        <div>
            {carsList}
        </div>
    )
}

export default CarListRender
