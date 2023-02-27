
import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
//import Billu from './component/Billu'
//import Counter from './component/Counter'
//import EventBind from './component/EventBind'
//import Useeffect from './component/Useeffect'
import {Login} from './Component/Login';
import {Register} from './Component/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (FormName) => 
  {
    setCurrentForm(FormName);
  }
  
  return (
    <div className="App">
{ 
      currentForm === Login ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      
     </div>
  );
} 
export default App; 
