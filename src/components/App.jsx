import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Main from "./main/Main.";


const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={Main} />
            </div>
        </BrowserRouter>
    );
};

export default App;