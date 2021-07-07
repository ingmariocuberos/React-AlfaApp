import React from 'react';
import PropTypes from 'prop-types';

const ItemToBeEvaluated = ({id, p, checks, setChecks}) => {

    const handleClick = ({ target }) =>{

        setChecks({...checks,
            [target.name]: !checks[target.name],
            ["a"+target.name]: !checks[target.name] ? target.value : "" 
        });

    }
        
    return (
        <>
            <div className="">
                <div 
                    className={ checks[id]===true ? "flex-item form-check checker-2 check-item selected-check" : "flex-item form-check checker-2 check-item" }
                    >
                    <input 
                        className= "form-check-input checker-form"
                        type="checkbox"
                        name={ id }
                        value={ p } 
                        id={`flexCheckChecked${id}`}
                        onClick={ handleClick }
                        />
                    <label 
                        className="form-check-label" 
                        htmlFor={`flexCheckChecked${id}`}>
                        { p }
                    </label>
                </div>            
            </div>
        </>
    )
}

ItemToBeEvaluated.propTypes = {
    id: PropTypes.string,
    p: PropTypes.string,
    checks: PropTypes.object,
    setChecks: PropTypes.func
}

export default ItemToBeEvaluated;
