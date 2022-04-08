import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route, Navigate} from "react-router";
import Main from "./main/Main.";
import Card from "./card/card";


const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/card" element={<Card/>} />
                <Route path="*" element={<Navigate to="/" replace />}
                />
            </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;