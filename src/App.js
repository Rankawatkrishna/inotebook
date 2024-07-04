import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
   <>
    <NoteState>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<><Navbar showAlert={showAlert}/><Alert alert={alert}/><Home showAlert={showAlert}/></>}/> 
      </Routes>
      <Routes>
          <Route path='/about' element={<><Navbar/><About/></>}/> 
      </Routes>
      <Routes>
          <Route path='/login' element={<><Navbar/><Alert alert={alert}/><Login showAlert={showAlert}/></>}/> 
      </Routes>
      <Routes>
          <Route path='/signup' element={<><Navbar/><Signup showAlert={showAlert}/></>}/> 
      </Routes>
    </BrowserRouter>
    </NoteState>
   </>
  );
}

export default App;
