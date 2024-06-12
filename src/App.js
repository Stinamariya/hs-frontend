import logo from './logo.svg';
import './App.css';
import Appoinment from './components/Appoinment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Appoinment/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
