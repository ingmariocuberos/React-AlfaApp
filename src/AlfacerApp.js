import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { UserContext } from "./components/UserContext";

export const AlfacerApp = () => {

    const [infoUser, setInfoUser] = useState({
        user: "",
        currentPage: 0,
        answers: {
            q1: "0",
            q2: "0",
            q3: "0",
            q4: "1"

        }
    });

    const [validate, setValidate] = useState(false)
    
    return (
        <div className="container-aplication">
            <img src="./img/logo-alfa.png" alt="logo de pisos alfa cerámica" className="logo-alfa"></img>
            <div className="first-container position-absolute top-50 start-50 translate-middle">
                <UserContext.Provider 
                    value={ 
                        {
                            infoUser,
                            setInfoUser,
                            validate,
                            setValidate
                        }
                    }
                >
                    <AppRouter />
                </UserContext.Provider>
            </div>
            <footer className="footer"><small>Author: Mario Cuberos Hernández</small><br />
            <small className="only-desktop">Todos los derechos reservados © 2021</small>                
            </footer>
            
        </div>
        
    )
}
