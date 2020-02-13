import React from 'react'

/* La <td> tag sirve para hacer tablas, estas llevan el nombre del
encabezado, y no pueden estar encerrads en un <div> ya que aparecerá
error en consola, por lo mismo deben estar dentro del tag <React.Fragment>  */

function FragmentDemoColumn() {
    return (
        <React.Fragment>
            <td>Name</td>
            <td>Daniel</td>
        </React.Fragment>
    )
}

export default FragmentDemoColumn
            
