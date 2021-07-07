import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export const Acceso = () => {

    const [tries, setTries] = useState(0)

    const { validate, setValidate } = useContext(UserContext);

    const [captura, setCaptura] = useState("");

    useEffect(() => {
        fetch("/info.JSON")
            .then(response => response.json())
            .then(data => setCaptura(data))
        
    }, [])
    
    const handleSubmit = (e) =>{

        e.preventDefault();        
    
        for(let area in captura){
    
            if(captura[area] === value){
                setValidate(true);                
                break;
            } else{
                setValidate(false);
            }
        }

        if(validate===false){
            setTries(tries => tries+1);
        }
        setValue("");
    }

    const [value, setValue] = useState("")    

    const handleInputChange = ({ target }) => {

        setValue(target.value);

    }
    
    return (
        <>
            <h2 className="mt-4 text-center">Bienvenido al Sistema de Valoración Alfa</h2>
            <hr />
            <div className="container">
                <div className="row flex">
                    <div className="col-10">
                        <h4>Accede para dar una calificación</h4>
                        <div className="row">
                                <p>Ingresa el código asignado a tu área. <b>Para demo ingrese: 1234</b></p>
                            </div>

                            <form className="row">
                                <input
                                    type="password"
                                    className="access-input"
                                    value={ value }
                                    onChange={ handleInputChange }
                                    required
                                />
                                { tries > 0 && <small>Está ingresando un código de área incorrecto</small>}
                                <button
                                    type="submit"
                                    className="btn btn-warning access-button mt-1"
                                    onClick={ handleSubmit }                   
                                >
                                    INGRESAR
                                </button>
                            </form>
                    </div>                    
                </div>
            </div>
        </>
    )
}
