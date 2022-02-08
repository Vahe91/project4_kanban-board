import React, {useState, useEffect } from 'react';

import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer'

import './App.css';

function App() {
    const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);
    
    return (
        <>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer tasks={tasks} />
        </>
    );
}

export default App;
