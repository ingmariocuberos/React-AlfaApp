import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const ButtonsDown = () => {
    
    const { infoUser, setInfoUser } = useContext(UserContext);

    const disminuirCurrentpage = () =>{

        setInfoUser({...infoUser,
        currentPage: (infoUser.currentPage-1) })

    }

    const aumentarCurrentpage = () =>{

        setInfoUser({...infoUser,
        currentPage: (infoUser.currentPage+1) })

    }

    return (
        <>
            <div 
                    className="bottom-container">

                        { infoUser.currentPage !== 0 && infoUser.currentPage !== 1 ? 
                            <button
                                className="bottom-button col-6"
                                onClick={ disminuirCurrentpage }>
                                { infoUser.currentPage !== 0 && infoUser.currentPage !== 1 ? <p className="text-animation-1"><i className="fas fa-arrow-circle-left"></i>&nbsp;&nbsp; ATRÁS</p> : <p></p> }
                            </button> 
                            : <button
                                className="bottom-button col-6" disabled>
                                    &nbsp;
                                </button> 
                        }

                        {infoUser.currentPage !== 0 ? 
                            <button
                                className="bottom-button col-6"
                                form={infoUser.currentPage === 5 ? "sending-form" : ""}
                                onClick={ infoUser.answers[`q${infoUser.currentPage}`] !== "0" ? aumentarCurrentpage : undefined }>
                                {infoUser.currentPage !== 0 ? 
                                    <>{infoUser.currentPage !== 4 ? 
                                        <p className="text-animation-2">SEGUIR &nbsp;&nbsp;<i className="fas fa-arrow-circle-right "></i></p> 
                                        : 
                                        <p className="text-animation-2">ENVIAR &nbsp;&nbsp;<i className="far fa-paper-plane"></i></p> } 
                                    </>
                                    : 
                                    <p></p> 
                                }                                              
                            </button> 
                            : 
                            <button
                                className="bottom-button col-6"
                                disabled>
                                &nbsp;                                              
                            </button> 
                        }
                            
                        
                    </div>
        </>
    )
}
