import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import About from './components/About';
function App() {
  const [mode, setMode] = useState('dark');         /* usestate */
   
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
     /*  document.body.style.backgroundColor = '#042743'; */
    /*   showAlert("Dark mode has been enabled", "success"); */
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    /* showAlert("Light mode has been enabled", "success"); */
  }
}
  return (
   <>
<Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}
About="Textutils About" Home="Home"/>  {/* props */}
<div className="container my-3">
  <Textform heading ="Enter the text to analyze below"/> 
 {/*  <About/> */}
</div>
   </>
  );
}
export default App;


