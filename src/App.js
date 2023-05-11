import React from 'react';

import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header';
import Footer from './components/footer';
import Fiche from './pages/Fiche/fiche';
import Error from './pages/Error404/Error404';

function App() {
  return (
    <div className="App">

<Header/>
<Routes>


<Route path="/" element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/:id" element={<Fiche/>} />
<Route path="*" element={<Error />} />
</Routes>
<Footer/>
     
    </div>
  );
}

export default App;
