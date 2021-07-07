import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const PositiveOrNegative = () => {

    const { infoUser, setInfoUser } = useContext(UserContext);

    const handleClick = ({ target }) =>{

        setInfoUser({...infoUser,
            answers:{
                ...infoUser.answers,
                q2: target.value
            }
        })

    }

    const tiposDeValoracion = [
        ["Positiva", "opCont1", "inlineRadio1", "./img/Estrella.png", "estrella evaluacion", "1111"],
        ["Negativa", "opCont2", "inlineRadio2", "./img/bad-recomendation.png", "mala calificacion", "2222"]
    ]

    return (
        <>
            <h2 className="mt-4 text-center mt-5">Tipo de Valoración</h2>
            <hr />

            <div 
                className="container-sm mt-1">
                    <div 
                        className="row general-opinion-container mt-1">
                        { tiposDeValoracion.map( valoracion => <div  key={ valoracion[5] }
                            className={ infoUser.answers.q2===valoracion[0] ? "form-check form-check-inline opinion-container col-4 selected-option" : "form-check form-check-inline opinion-container col-4" }
                            name={ valoracion[1] }
                            >
                                <input 
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id={ valoracion[2] }
                                    value={ valoracion[0] }
                                    onClick={ handleClick }                                    
                                    />
                                <label 
                                    className="form-check-label new-form-label" 
                                    htmlFor={ valoracion[2] }
                                    >
                                        <img 
                                            src={ valoracion[3] }
                                            alt={ valoracion[4] } 
                                            className="imagen-form"
                                            />
                                            { valoracion[0] }
                                </label>
                            </div>)}
                    </div>
                </div>  
            
            
        </>
    )
}
