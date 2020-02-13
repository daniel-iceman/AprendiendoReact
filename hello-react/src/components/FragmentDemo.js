import React from 'react'


/* En React siempre que agregamos varios componentes estos deben estar encerrados
en un componente unico que los concentre, por ejemplo un <div> aunque para evitar
errores en consola se recomienda utilizar el tag <React.Fragment> */
function FragmentDemo() {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo Component</p>
        </React.Fragment>
    )
}

export default FragmentDemo


