import React, { useContext } from 'react'
import "../styles/style.css";
import { Acceso } from './Acceso';
import { Calificar } from './Calificar';
import { UserContext } from './UserContext';

export const Principal = () => {

    const { validate } = useContext(UserContext);

    return (
        <div>
            <div className="container-sm">
                
                
                { !validate && <Acceso />}
                
                { validate && <Calificar />}

            </div>

            

        </div>
    )
}
