import React from 'react'

export const Observaciones = () => {

    return (
        <>
            <h2 className="text-center mt-5">Observaciones adicionales</h2>
            <hr />
            <div 
                className="input-group mb-3">
                <span 
                    className="input-group-text" 
                    id="inputGroup-sizing-default"
                    >
                        Observaciones
                    </span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" 
                    defaultValue="Ninguna"/>
            </div>
        </>
    )
}
