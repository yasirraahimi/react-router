import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { Routes ,Route } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light')
  const [mode1, setMode1] = useState('black')
  const [btnColor, setBtnColor] = useState('primary')
  const [alert, setAlert] = useState(null)
 
  const showAlert=(message,type)=>{
setAlert({
  msg :message,
  type: type
})
  }
 setTimeout(() => {
 setAlert(null); 
 }, 2500);
  const toggleMode = () => {
    if(mode==='light' && mode1=='black'){
      document.getElementById('root').style.background='#212529'
      document.body.style.backgroundColor = '#212529';
      setMode('black');
      setMode1('light')
      showAlert("  Dark Mode is Enabled","success")
      setBtnColor('black')
      
    }
    else if(mode==='black' && mode1=='light'){
      setMode('light')
      setMode1('black')
      document.getElementById('root').style.background='white'
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode is Enabled","success")
      setBtnColor('primary')
    }
    else{
      setMode('black')
      setMode1('black')
      showAlert("light Mode is Enabled","success")
      
    }
  }
 
  return (
    
 <>

      
<Navbar title = "MY REACT APP " mode={mode} mode1={mode1} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3" />
<Routes>
<Route path='/about' element={<About mode={mode} mode1={mode1}/>} />
<Route path='/' element={<TextForm heading="Enter the Text to Analyze" btnColor={btnColor}  mode={mode} mode1={mode1} showAlert={showAlert}/>} />
</Routes>



      
 </>
  );
}

export default App;
