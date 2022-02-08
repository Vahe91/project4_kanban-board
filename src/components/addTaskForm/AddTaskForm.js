import React, { useState, useContext } from "react";
import uniqId from 'uniqid';
import CustomContext from "../../CustomContext";

import plus from '../../img/plus.svg';

import './AddTaskForm.css';

const AddTaskForm = ({ tasks, handleClick, isClicked, setIsClicked }) => {
    const [taskName, setTaskName] = useState();
    const setTasks = useContext(CustomContext);

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    const addNewTask = (e) => {
        e.preventDefault();
        e.target.reset();

        const newTask = {
            status: 'Backlog',
            id: uniqId(),
            name: taskName,
            description: ''
        };

        setIsClicked(false);
        setTasks([...tasks, newTask])
    }

    return(
        <>
            <button onClick={handleClick} className={`task-list__add-btn ${isClicked ? 'task-list__add-btn_hide' : ''}`}><img src={plus} alt='plus'/> Add card</button>

            <form onSubmit={(e) => addNewTask(e)} className={`task-list__form ${isClicked ? '' : 'task-list__form_hide'}`}>
                <input className='task-list__form__input' type="text" onChange={handleChange} required/>
                <button type='submit' className='task-list__form__submit'>Submit</button>
            </form>
        </>
    )
}

export default AddTaskForm;