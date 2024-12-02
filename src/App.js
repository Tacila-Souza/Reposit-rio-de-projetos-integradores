import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './Paginas/Home';
import Etes from './Paginas/Etes';
import Sobre from './Paginas/Sobre';
import Paglogin from './Paginas/Paglogin';
import Formulario from './Componentes/Formulario'

function App() {
  return (
    <>
< BrowserRouter>

< Routes >
  <Route path='/' element={<Home />}/>
  <Route path='/Etes' element={<Etes/>}/>
  <Route path='/Sobre' element={<Sobre/>}/>
  <Route path='/Paglogin'element={<Paglogin/>}></Route>
  <Route path='/Formulario' element={<Formulario/>}></Route>
</Routes>
</BrowserRouter >





    </>
 
  );
}

export default App;
