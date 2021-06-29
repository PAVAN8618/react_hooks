import React, {useState} from 'react'

function HookuseState() {
    const initialcount=0
    const [count,setcount] = useState(initialcount)

    return (
        <div>
              
                count :{count}
                <br/>
                <button onClick={()=>setcount(initialcount)}>Reset</button>
                <button onClick={()=>setcount(count+1)}>Increment</button>
                <button onClick={()=>setcount(count-1)}>decrement</button>
            
        </div>
    )
}

export default HookuseState
