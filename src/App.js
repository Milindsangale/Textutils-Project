import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
/* import About from './components/About'; */
function App() {
  return (
   <>
<Navbar title ="Textutils" About="Textutils About" Home="Home"/>  {/* props */}
<div className="container my-3">
  <Textform heading ="Enter the text to analyze below"/> 
{/*   <About/> */}
</div>
   </>
  );
}
export default App;