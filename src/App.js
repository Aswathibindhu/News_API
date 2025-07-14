import logo from './logo.svg';
import './App.css';
import AddNews from './Components/AddNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/View" element={<AddNews/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
