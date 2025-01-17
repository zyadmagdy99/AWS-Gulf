import './App.css';
import Navbar from './Components/Navbar';
import Landscape from './Components/Landscape';
import Brands from './Components/Brands';
import About from './Components/About';
import Services from './Components/Services';


function App() {
  return (
    
    <div className="App">
      <Navbar/>

     
      <Landscape/>
      <Brands/>
      <About/>
      <Services/>
     
    </div>
  );
}

export default App;
