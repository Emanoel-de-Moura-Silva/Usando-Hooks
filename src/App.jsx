import './App.css';
import React, {useState} from 'react';
import EntradaDado from './components/EntradaDado';
import SaidaDado from './components/SaidaDado';
import Logo from './React-icon.svg.png'

const App = () =>{
  const [username, setUsername] = useState('Maujor')
  return (
    <div className='App'>
      <img src={Logo} alt=''/>
      <EntradaDado username={username} setUsername={setUsername}/>
      <SaidaDado username={username}/>
    </div>
  )
}

export default App;
