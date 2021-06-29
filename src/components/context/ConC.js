import React from 'react'
import {firstName, lastName , mono} from '../../App'


function ConC() {
    
    
    return (
        <div>

            <firstName.Consumer>
                {
                    (value) => {
                        return(
                            <h1>
                                my name is {value.name},  last name {value.lastname} mo {value.number} 

                            </h1>             
                            ) 
                    }
                }
            </firstName.Consumer>
            <h2>hi this is context file</h2>
        </div>
    )
}

export default ConC
// export {firstName};