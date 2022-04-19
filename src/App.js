import React from 'react';

import {Home, Cart} from './pages';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";

function App(){
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/cart" element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
