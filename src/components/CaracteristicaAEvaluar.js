import React, { useEffect, useContext } from 'react';
import ItemToBeEvaluated from './ItemToBeEvaluated';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types'

const CaracteristicaAEvaluar = ({ checks, setChecks }) => {

    const { infoUser, setInfoUser } = useContext(UserContext);

    const items = ["1Atención cortés y diligente", "2Confiabilidad en el resultado", "3Calidad en el servicio", "4Trabajo en equipo", "5Liderazgo", "6Tiempos de respuesta", "7Proactividad", "8Otro"];

    useEffect(() => {
        for(const check in checks){
            if(checks[check]===true){
                setInfoUser({
                            ...infoUser,
                            answers: {...infoUser.answers,
                                q3: "1"
                            }
                        })
                        break;
            } else {
                setInfoUser({
                            ...infoUser,
                            answers: {...infoUser.answers,
                                q3: "0"
                            }
                        })
            }
        }
    }, [checks])



    return (
        <>
            <div className="container-items-to-be-evaluated">
                {items.map(item=> <ItemToBeEvaluated id={item[0]} key={item[0]} p={item.substr(1)} checks={ checks } setChecks={ setChecks } />)}
            </div>            
            
        </>
    )
}

CaracteristicaAEvaluar.propTypes = {
    checks: PropTypes.object,
    setChecks: PropTypes.func
}

export default CaracteristicaAEvaluar;
