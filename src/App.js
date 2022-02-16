import logo from './logo.svg';
import './App.css';
import Presentation from './pages/Presentation.js';
import Logo from './components/Logo.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Logo/>

      <div className='main'>
        <Routes>
          <Route path="/" element={<Presentation/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
