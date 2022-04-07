import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import Main from "./main/Main.";


const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;