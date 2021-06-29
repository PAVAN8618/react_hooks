// import logo from './logo.svg';
import './App.css';
// import HookuseState from './components/HookuseState';
// import HookuseState2 from './components/HookuseState2';
// import UseStateArray from './components/UseStateArray';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
import ConA from './components/context/ConA';
import React,{ createContext }  from 'react';

const firstName = createContext()
// const lastName = createContext()
// const mono = createContext()

function App() {
  
  
  return (
    <div className="App">
      <div className="count">
   
    {/* <HookuseState/>
   <HookuseState2/>
   <UseStateArray/>
   <HookMouse/> */}
   {/* <MouseContainer/> */}
   <firstName.Provider value = {{name:"pavan " ,lastname:"kmar" , number:861545}}>
     
     <ConA/>
     
   </firstName.Provider>
      
    </div>
    </div>
  );
}

export default App;
export {firstName};
