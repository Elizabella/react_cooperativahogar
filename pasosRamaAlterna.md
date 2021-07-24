git branch rama-pepito (para crear una rama alterna)
git branch -a (es para ver cuantas ramas tenemos disponibles)

git checkout rama-pepito (para entrar a la rama-pepito)

git status

git add .

git commit -m "commentario"

---

## git checkout master (para irse a la rama master)

git push origin rama-pepito

ahora en el git hub hacemos un pull request

git merge master (cuando estas dentro de la rama-pepito y quieres hacer la actualización del master a tu ramas)

git branch -D rama-pepito (estando en el master, para eliminar la rama-pepito)

si quiero crear una nueva rama:

desde el master:
git branch rama-alex
git checkout rama-alex

y empiezo a trabajar en la rama-alex

/**PROBANDO BRANCH RAMA**

## ESTO ES UNA PRUEBA


********************************************************************************+
pasos para crear un menu desplegable:

import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap';

        const [dropdown, setDropdown] = useState(false);
        
        const abrirCerrarDropdown = () => {
            setDropdown(!dropdown)
        }

          <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} >
                <DropdownToggle>
                    ejemplo
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>1</DropdownItem>
                    <DropdownItem>2</DropdownItem>
                </DropdownMenu>
            </Dropdown>
 *****************************************************************************+ 

 he agregado redux thunk
    yarn add redux-thunk 
para hacer el store de redux
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.
yarn add google-map-react