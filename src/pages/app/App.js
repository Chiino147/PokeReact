import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Game from '../game/Game'
import Home from '../home/Home'
import Footer from '../Footer/Footer';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/game/:game' element={<Game/>}/>


      </Routes>
      <Footer/>
  

      


    </div>
  );
}

export default App;
