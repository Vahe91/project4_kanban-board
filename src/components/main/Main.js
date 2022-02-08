import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TaskBoard from '../taskBoard/TaskBoard';
import TaskDescription from '../taskDescription/TaskDescription'

import './Main.css'

const Main = ({ tasks }) => {
    return(
        <main className="main">
             <Router>
                <Routes>
                    <Route path="/" element={<TaskBoard tasks={tasks} />} />
                    <Route path={'/:taskId'} element={<TaskDescription tasks={tasks} />}/>
                </Routes>
            </Router>  
        </main>
    )
}

export default Main;