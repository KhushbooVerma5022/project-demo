import React, { useState, useEffect } from 'react';
import TextForm from "./components/TextForm";
import Navbar from './components/Navbar';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  // useEffect(() => {
  // alert("hiiii");
  // }, [])

  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#021024'
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  // const greenMode = () => {
  //   if (mode === 'light') {
  //     setmode('dark');
  //     document.body.style.backgroundColor = '#031e05'
  //   } else {
  //     setmode('light');
  //     document.body.style.backgroundColor = 'white'
  //   }
  // }

  // const brownMode = () => {
  //   if (mode === 'light') {
  //     setmode('dark');
  //     document.body.style.backgroundColor = '#1c0303'
  //   } else {
  //     setmode('light');
  //     document.body.style.backgroundColor = 'white'
  //   }
  // }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <TextForm mode={mode} toggleMode={toggleMode} />
          {/* <Routes> */}
            {/* <Route path='/' element={<TextForm mode={mode} toggleMode={toggleMode} />} /> */}
            {/* <Route path='/About' element={<About mode={mode} />}/>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App