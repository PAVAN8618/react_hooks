import React ,{useState,useEffect} from 'react'

function HookMouse() {

    const [x,setx]=useState(0)
    const [y,sety] =useState(0)
    const logMousePosition = e => {
        console.log('mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    
        return ()=>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])


    return (
        <div>
            Hook X-{x} y-{y} 
            
        </div>
    )
    }

export default HookMouse
