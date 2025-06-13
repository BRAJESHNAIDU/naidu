import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter basename='/naidu'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
