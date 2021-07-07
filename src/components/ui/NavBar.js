import React, { useContext } from "react";
import {
  NavLink
} from "react-router-dom";
import { UserContext } from "../UserContext";

export const NavBar = () => {

    const { infoUser, setInfoUser, setValidate } = useContext(UserContext);
    
    const closeSession = () => {

        setInfoUser({...infoUser,
        currentPage: 0})
        
        setValidate(false);
    }
    


    return (
        <div>

            <nav id="navbar" className="navbar navbar-expand-md bg-dark navbar-dark">

                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="navbar-brand" to="./" onClick={ closeSession }>Inicio</NavLink>
                </li>                
                { infoUser.currentPage !== 0 
                                ? 
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="./" onClick={ closeSession }>Cerrar sesión</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="./Resultados">Ver Resultados</NavLink>
                                </li>
                                }               
                
                </ul>

            </nav>
        </div>
    )
}
