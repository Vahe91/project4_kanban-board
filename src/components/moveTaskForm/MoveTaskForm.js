import React, { useRef, useContext } from "react";
import CustomContext from "../../CustomContext";

import plus from '../../img/plus.svg';

import './MoveTaskForm.css';

const MoveTaskForm = ({ getTasks, newStatus, isClicked, handleClick, tasks }) => {
    const id = useRef(null);
    const setTasks = useContext(CustomContext);

    const updateTask = () => {
        const updatedTasks = tasks.map(task => {
            return task.id === id.current.value ? {...task, status: newStatus} : task;
        });

        const filteredTasks = tasks.filter(task => task.id !== id.current.value);
        const taskToAdd = updatedTasks.find(task => task.id === id.current.value);

        setTasks([...filteredTasks, taskToAdd]);
        handleClick();
    }

    return(
        <>
            <button disabled={getTasks.length === 0 ? true : false} onClick={handleClick} className={`task-list__add-btn ${isClicked ? 'task-list__add-btn_hide' : ''}`}><img src={plus} alt='plus'/> Add card</button>
            <div className={isClicked ? '' : 'task-list__select_hide'}>
                <select ref={id} className="task-list__select">
                    {
                        getTasks.map(task => (
                            <option key={task.id} value={task.id} onChange={updateTask}>{task.name}</option>
                        ))
                    }
                </select>
                <button onClick={updateTask} className='task-list__form__submit' type='submit'>Submit</button>
            </div>
        </>
    )
}

export default MoveTaskForm;