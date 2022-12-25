import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
