import React, {useState, useEffect } from 'react';
import CustomContext from '../../CustomContext';

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
        <CustomContext.Provider value={setTasks}>
            <Header />
            <Main tasks={tasks} />
            <Footer tasks={tasks} />
        </CustomContext.Provider>
    );
}

export default App;
