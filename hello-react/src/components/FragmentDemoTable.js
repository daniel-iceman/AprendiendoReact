import React from 'react'
import Columns from './FragmentDemoColumn'

// Esta es la estuctura utilizada para crear tablas.

function FragmentDemoTable() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    )
}

export default FragmentDemoTable
            
