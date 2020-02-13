//rce
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

// MOUNTING y UPDATING LIFECYCLE
// PADRE

class LifecycleA extends Component {

// ESTE SERÁ EL ORDEN EN EL QUE LOS METODOS SE EJECUTARAN (podran ser
// verificados mediante los console.log)
    //rconst
    /* MOUNTING Y UPDATING PASO 1- Creamos un constructor y agregamos en el estado una propiedad
    "name" inicializada a "Daniel".  Dentro del constructor agregamos un "console.log" que
    escriba "LifecycleA constructor" */
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Daniel'
             
        }

        console.log('LifecycleA constructor')
    }
        

    /* MOUNTING Y UPDATING PASO 2- El segundo metodo que tenemos es el "static getDerivedStateFromProps" 
    que acepta como parametros "props" y "state" y retorna un estado o null.  Para
    evaluar el orden de ejecución agregamos otro console.log */
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    /* MOUNTING PASO 4- Por último creamos un metodo "componentDidMount" y dentro de el un
    console.log para evaluar tambien el orden de ejecución.*/
    componentDidMount() {
        console.log('LifecycleA componentDidMount')        
    }

    /* UPDATING PASO 4 - Justo antes del render se agrega el componente del "updating" y 
    es importante no olvidar agregarle un "return true"  */
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    /* UPDATING PASO 5 - Agregamos tambien el componente "getSnapshotBeforeUpdate" */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    /* UPDATING PASO 6 - Finalmente agregamos el metodo  "componentDidUpdate" */
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    /* Aqui definimos el handler que posee el boton */
    changeState = () => {
        this.setState({
            name: 'Code Evolution'
        })
    }

    
    /* MOUNTING Y UPDATING PASO 3- Agregamos un texto a la etiqueta <div> e igualmente agregamos un
    console.log para evaluar orden de ejecución */
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div> 

                {/* Agregamos un boton que cambie el estado por medio de un handler*/}
                <button onClick={this.changeState} >Change state</button>   

                {/* MOUNTING -Agregamos el componente "<LifecycleB />" como hijo
                del componente "lifecycleA" */}
                <LifecycleB />             
            </div>
        )
    }
}

export default LifecycleA



/* MOUNTING Lifecycle methods
Estos metodos son llamados cuando es creada la instancia
de un componente e insertada en el DOM y serán enviadas
en el orden en el que sean invocadas.
- Primero tendremos al "constuctor(props)" que es una función
especial que será llamada cuando un nuevo componente sea creado;
el constructor será perfecto para inicializar el estado o hacer un
"binding" de los handlers del evento a la instancia de la clase.
Lo que o se puede hacer en el constructor es causar "efectos secundarios"
por ejemplo, crear solicitudes del http dentro del constructor.
Existen 2 puntos que deberán tomarse en cuenta al elaborar un constructor:
* El primero, siempre deberá contener una función especial llamada "super(props)"
* El segundo es que el constructor es el único lugar donde esperamos cambiar o
establecer el estado sobreescribiendo directamente los campos "this.state".  En 
todos los demas escenarios tendriamos que usar el "this.setState".

- El Segundo metodo que tenemos es un método estatico 
"static getDerivedStateFromProps(props,state) se usa muy poco y es para props que
 cambian continuamente.

- El Tercer método es "render", que es el único metodo requerido y necesario
en un componente de clase.   En este metodo lo único que hacemos es leer los
"this.state" y retornarlos (return)

- El Cuarto y último método que forma parte de la fase de montado será 
el "componentDidMount()" este metodo solo se llamará una vez en todo el
ciclo de vida de un componente, este será invocado inmediatamente después
de que el componente y todos hijos sean renderizados en el DOM.   Este metodo es
el lugar perfecto para causar "efectos secundarios", aquí podemeos interactuar
con el DOM o realizar cualquier llamado a "AJAX" para cargar datos.  Por lo tanto
el "componentDidMount()" es el lugar adecuado para realizar la inicialización
que requiere "nodos" del DOM y tambien cargar datos haciendo solicitudes a
la "network"
Este será el orden en el que serán ejecutados los metodos cuando solo hay un
componente:

LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleA componentDidMount

Si existiera un componente hijo el orden de ejecución sería el siguiente:

LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render
LifecycleB componentDidMount
LifecycleA componentDidMount

** Es importante observar que el "componentDidMount" de A no se ejecuta sino
hasta que termina todo el ciclo de B una vez que fué llamado.   Esto es importante
a la hora de programar.
*/




/* UPDATING LIFECYCLE METHODS

Son los metodos que son llamados cuando un componente es re-renderizado
debido a que cambiaron sus props o estado.   Cuenta con 5 metodos, sin 
embargo 3 de ellos entran dentro de la categoria de "raramente usados".

- Primer metodo "static getDerivedStateFromProps( props,state )" es un metodo
que recibe "props" y "states" como parametros y regresa un "null" o un objeto
que representa la actualización del estado del componente.   Este método es
llamado cada que el componente es re-renderizado.   Este metodo es usado cuando
el estado depende de las props del componente. ESTE METODO ES DE LOS MAS RARAMENTE 
USADOS en la fase de "Updating".

- El segundo metodo utilizado es el "shouldComponentUpdate( nextProps, nextState )"
este metodo recibe las props y estados actualizados, el proposito de este método 
es limpiar su nombre, el dicta si todos los componentes se re-renderizan o no, por 
default todos los componentes de clase se re-renderizaran cuando las props o 
el estado que reciban cambie.   Este metodo puede prevenir que el comportamiento
por default retorne "false".   Lo que se puede hacer en este metodo es comparar
los valores existentes de las props y el estado con los valores de "nextProps" 
y "nextState" y regresar un "true" o "false" para permitir a react saber si el
componente se actualizó o no.  Por lo tanto este metodo es basicamente para la
optimización y el performance.   ESTE METODO ES RARAMENTE USADO en el lifecycle.

- El tercer metodo es el "render" su función será leer el "this.props" y "this.state"
y retornará el JSX que describa al UI.   EL MAS USADO EN UPDATING

- El cuarto metodo utilizado será "getSnapshotBeforeUpdate(prevProps, prevState)"
el cual acepta "prevProps" y "prevState" como parametros y es llamado justo antes
de que se generen los cambios en el DOM y estos sean reflejados.  Puede retornar
un "null" o un valor.   ESTE METODO ES RARAMENTE USADO.

- El quinto y último metodo usado es 
"componentDidUpdate(prevProps, prevState, snapshot)", este metodo será llamado 
después de que el render haya terminado en los ciclos de la re-renderización.
Con este método podremos estar seguros de que el componente y todos sus 
subcomponentes han sido renderizados adecuadamente despues de la actualización.
Este metodo acepta 3 parametros "prevProps", "prevState" y "snapshot" que es
retornado del "getSnapshotBeforeUpdate".   Este método garantiza ser llamado
solo por una ocasión en cada renderización, asi es que aquí es donde podremos
generar nuestros "efectos secundarios" como llamados a AJAX, pero antes de 
hacer la llamada necesitaremos comparar las props previas con las nuevas props 
y entonces decidir donde hacer la llamada de AJAX o no.   Asi es que el metodo
"componentDidUpdate" llama solo despues de que el componente se ha re-renderizado 
y puede hacer llamadas a AJAX basado en los valores de las props previas y actuales.
EL MAS USADO EN UPDATING.
 */



 /* UNMOUNTING PHASE METHOD

 Solo tiene un metodo:

 componentWillUnmount() - este metodo es invocdo inmediatamente antes de que un 
 componente sea desmontado y destruido.   En este metodo se pueden crear tareas de
 limpieza como cancelar solicitudes a la network, remover "handlers" de eventos,
 cancelación de subscripciones.   No llama cambios de estado.



 */