import React, {useEffect} from 'react';
import NavBar from './Components/NavBar';
import FooterBar from './Components/FooterBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './styles.css';

function App() {

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;