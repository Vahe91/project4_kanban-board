import React from 'react';
import { useMatch, Link } from 'react-router-dom';

import cross from '../../img/cross.svg'

import './TaskDescription.css';

const TaskDescription = ({ tasks, setTasks }) => {
    const { params: {taskId} } = useMatch('/:taskId');
    const task = tasks.find(task => task.id === taskId);

    const handleChange = (e) => {
        task.description = e.target.value
        setTasks([...tasks]);
    }

    return(
        <div className='description'>
            <div className='description__header'>
                <h2 className='description__title'>{task.name}</h2>
                <Link to={'/'}><img src={cross} alt="cross" className='description__cross' /></Link>
            </div>
            <textarea className='description__textarea' defaultValue={task.description} onChange={handleChange} />
        </div>
    )
}

export default TaskDescription;