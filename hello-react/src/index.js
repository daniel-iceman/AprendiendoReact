/*El index.js es el archivo donde se va a renderizar (compilar) todo
por medio de la importación de "App.js"
*/
import React from 'react';
import ReactDOM from 'react-dom';

/* Aqui se importa el archivo "App.js que contiene "la estuctura" que
aparecerá en el DOM*/
import App from './App'



// Aqui se crea la constante "container" donde se agrega el "id"
// en el cual estará contenido los elementos renderizados (el donde)
const container = document.getElementById('root')

// AQUI SE ENVIA LA INFORMACIÓN AL DOM
// ReactDOM.render(_QUE_, _DONDE_)

ReactDOM.render(<App />, container)





