import logo from './logo.svg';
import './App.css';
import Appoinment from './components/Appoinment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Appoinment/>}/>
      <Route path='/doctors'element={<Doctors/>}/>
      <Route path='/search'element={<Search/>}/>
      <Route path='/doctors'element={<Doctors/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
