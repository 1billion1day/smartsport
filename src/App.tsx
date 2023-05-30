import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Group} from "./Group";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/group"} element={<Group/>}/>
            </Routes>
        </>
    );
}

export default App;
