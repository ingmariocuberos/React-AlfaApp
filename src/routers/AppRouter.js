import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "../styles/style.css";
import { Principal } from "../components/Principal";
import { NavBar } from "../components/ui/NavBar";
import { ButtonsDown } from "../components/ButtonsDown";
import { Acceso } from "../components/Acceso";
import { Resultados } from "../components/Resultados";

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/resultados" component={ Resultados }></Route>
                    <Route exact path="/cerrar" component={ Acceso }></Route>
                    <Route exact path="/" component={ Principal }></Route>                  
                </Switch>

                <ButtonsDown />

            </div>                    
        </Router>
    )
}
