import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Add from './Add';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>

      </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
}

export default App;
