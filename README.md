Proyecto final de frontennd


para empezar: yarn create react-app nombre

para enrutar instalamos: yarn add react-router-dom axios redux react-redux

rafce: para crear la función componente




creando sistema de enrutamiento:
modules:
pos:
creamos los archivos que se ven en el codigo, en este punto tenemos los siguientes archivos:
------------------------------------------------------------
PosPos.js:
import React from 'react'

const PosPos = () => {
    return (
        <>
           aqui ira la pantalla principal del punto de venta 
        </>
    )
}

export default PosPos
--------------------------------------------------------------

PosRouter.js:
import React from 'react'
// aqui vamos a crear nuestras rutas solo para las POS
import { Switch, Route } from 'react-router-dom'
import PosPos from './pages/PosPos'

const PosRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/pos/pos" component={PosPos} />
                {/* /* para que esto funcione tenemos que colocar el enrutador general el papa en la APP.Js */}
            </Switch>
        </>
    )
}

export default PosRouter
-------------------------------------------------------------

App.js:
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PosRouter from './modules/pos/PosRouter'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/pos" component={PosRouter} />  {/*hemos creado el enrutador padre */}
        </Switch>
      </Router>
    </>
  )
}

export default App
--------------------------------------------------------------
--------------------------------------------------------------

ahora, para empezar a migrar, vamos a copiar todo el index al PosPos .js... para tenerun panorama general.. (ya de ahi lo podemos dividir en componentes)
 ojo (los componentes deben tener siempre su cierre)
 los class cambiarlos a className, selecciona la palabra y presiona "Ctrl D" varias veces.


 ahora copiamos los sass a src. (por nada del mundo deben conversar la carpeta public con la carpeta src)

 ahora llamamos el index.scss desde index.js (los stylos son globales, puedo llmarlo desde el index.js o app.js)
--------------------------------------------------------------------------
-------------------------------------------------------------------------




 ahora instalamos un libreria para sass:
 node-sass(no es compatible con react en su ultima versión, asi que instalamos la versión anterior)
             * yarn add node-sass@4.14.1 --exact   (el --exact hace que no se coloque el sombrerito en el package.json)
--------------------------------------------------------------------------
segunda opción:
            * npm uninstall node-sass
            *npm install sass
--------------------------------------------------------------------------
---------------------------------------------------------------------






Ahora, estamos en desarrollo y no es producción. caudno se vuelva en producción el index scss estará a la altura del index.html (public) por eso ponemos las imagenes en public (creamos una carpeta).  al momento de la producción la carpeta src no va a existir (al subirlo al hosting)
----------------------------------------------
 url("/final/public/img/comanda.png") !jamas hagan esto!! no se puede relacionar la carpeta public con src.
 lo correcto seria: url("../assets/img/comanda.png")
 solo cuando se va a importar en un sass


 si es que se quiere importar a los jsx entonces debemos tener los svg en la carpeta public
 ---------------------------------------------------------------


 otra forma de colocar logos (sin colocar la carpeta img en la carpeta public)
 import logoSVG from './../../../assets/img/logo.svg';

 const PosPos = () => {
    return (
        <>
  <header className="header">
    <div className="header__logo">
      <img src={logoSVG} alt="" />
    </div>
{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
-------------------------------------------------------------
----------------------------------------------------------------
cuando algo sale mal, borra el node modules (carpeta) manualmente
y coloca en la terminal: 
                     *npm cache clean --force
  y luego colocar:
                    * yarn (es como colocar npm install)

-------------------------------------------------------------------------
-----------------------------------------------------------------------
 }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}



ahora vamos a configurar redux...
creamos una carpeta redux dentro de src, dentro de redux store y dentro de store un archivo store.js:
La configuración siempre será la misma y solo se hace una vez asi que copia y pega nada más:

import {createStore, combineReducer, applyMiddleware, compose} from 'redux';
import {authReducer} from '';
import thunk from   'redux-thunk';

const composeEnhancers = 
    (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducer({
    auth: authReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

-------------
  * yarn add redux-thunk
-------------

ahora creamos las carpetas de :
reducers
types
actions

-------------------------------------------------------------
-------------------------------------------------------------
vamos a hacer un parentsis y vamos a configurar vs code para que aya autocompleta de html5 en react con emmet:

abrimos settings,,, y en la parte superior derecha hay un cuadro que dice ( open settings json)
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
____________________________________________________________
__________________________________________________________-_-




 vamos a instalar fontawesome:
 yarn add @fortawesome/react-fontawesome
 yarn add @fortawesome/fontawesome-svg-core
 yarn add @fortawesome/free-solid-svg-icons
 *******************************************************

para instalar bootstrap:
npm install react-bootstrap bootstrap@4.6.0
(import 'bootstrap/dist/css/bootstrap.min.css';)
(import { Container, NavDropdown, Navbar,Nav } from 'react-bootstrap';)
yarn add reactstrap 
(import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap';)
*********************************************************
para agregar fechas al proyecto:
yarn add date-fns
*********************************************************
instalamos uuid (nos permite crear un numero unico, un identificador, identificar sesiones, transacciones, como llave primaria en una base de deatos, etc):
yarn add uuid
***********************************************************************
para crear alertas personalizadas:
yarn add sweetalert2
*****************************************************************


Lo que se requiere para el proyecto final:
+ la autenticación es opcional (usar la autenticación del backend del profesor)
+ consumir datos de mock api
+ el profesor nos puede crear usuarios (opcional)
+ no veremos facturación electronica (la sunat nos da el persmiso como desarrollador o consumir de nubefact (mejor opción, OCE, consumir de una OCE, precio de 40 soles mensuales, y tú cobras 100 soles mensuales.))
+ 
