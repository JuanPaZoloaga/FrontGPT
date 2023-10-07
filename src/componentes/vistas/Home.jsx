import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Contenido from "../contenido/Contenido";
import { Route,Routes } from 'react-router-dom';
import Register from './Register';


function home() {
    return (
        <div className='container-fluid vh-80'>
            <div className='row'><Header/></div>
            <Routes>
                <Route element={<div className='row h-100'><Contenido/></div>} path='/'/>
                <Route element={<Register/>} path='/register'/>
            </Routes>
            
            <div className='row'><Footer/></div>           
            
                        
        </div>
    );
}

export default home;