import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export const AreaAValorar = () => {

    const { infoUser, setInfoUser } = useContext(UserContext);

    const changingValue = ({ target }) =>{        
        if(target.value !== 0){
            setInfoUser({...infoUser,
                answers:{
                    ...infoUser.answers,
                    q1: target.value
                }
            })
        }
    }

    return (
        <>
                    <h2 className="text-center mt-5">Área a Valorar</h2>
                    <hr />

                    <select 
                        id="exampleInputEmail1" 
                        className="form-select mt-5" 
                        aria-label="Default select example"
                        value={ infoUser.answers.q1 }
                        onChange={ changingValue }
                        required>
                        <option value="0">-Selecciona un área-</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Almacén">Almacén</option>
                        <option value="Calidad">Calidad</option>
                        <option value="Gestión Humana">Gestión Humana</option>
                    </select>
        </>
    )
}
