import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import { AreaAValorar } from './AreaAValorar';
import CaracteristicaAEvaluar from './CaracteristicaAEvaluar';
import { PositiveOrNegative } from './PositiveOrNegative';
import { Observaciones } from './Observaciones';


export const Calificar = () => {

    const [checks, setChecks] = useState({
        "1": false,
        "a1": "",
        "2": false,
        "a2": "",
        "3": false,
        "a3": "",
        "4": false,
        "a4": "",
        "5": false,
        "a5": "",
        "6": false,
        "a6": "",
        "7": false,
        "a7": "",
        "8": false,
        "a8": "",
    });

    const { infoUser, setInfoUser } = useContext(UserContext);

    useEffect(() => {
        setInfoUser({
            ...infoUser,
            currentPage: 1
        })
    }, [])

    return (
        <>
            <form id="sending-form" className="container-sm mt-5 form-user">

                <div className="mb-3">  

                { infoUser.currentPage === 1 && <><AreaAValorar /></>}

                { infoUser.currentPage === 2 && <><PositiveOrNegative /></>}

                { infoUser.currentPage === 3 && <>

                    <h2 className="title text-center">Función sobre la que hace la valoración</h2>
                    <hr />

                    <CaracteristicaAEvaluar checks={ checks } setChecks={ setChecks } />

                    <div 
                        className="form-text">Puede escoger una función o varias según considere </div></>}   

                { infoUser.currentPage === 4 && <Observaciones />}  
               
                </div>

                
            </form>
        </>
    )
}
