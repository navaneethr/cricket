import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import StartMatch from "./pages/StartMatch";


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/start-match" element={<StartMatch/>}/>
            </Routes>
        </BrowserRouter>
    )
}