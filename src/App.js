import logo from './logo.svg';
import './App.css';
import Appoinment from './components/Appoinment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Appoinment/>}/>
      <Route path='/doctors'element={<Doctors/>}/>
      <Route path='/search'element={<Search/>}/>
      <Route path='/delete'element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
