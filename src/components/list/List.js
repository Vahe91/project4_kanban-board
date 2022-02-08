import React, { useState } from "react";
import { Link } from 'react-router-dom';

import AddTaskForm from "../addTaskForm/AddTaskForm";
import MoveTaskForm from "../moveTaskForm/MoveTaskForm";

import './List.css';

function List({ listStatus, tasks, status, listTasks }) {
    const [isClicked, setIsClicked] = useState(false);

    const backlog = tasks.filter(task => task.status === status.backlog);
    const ready = tasks.filter(task => task.status === status.ready);
    const inProgress = tasks.filter(task => task.status === status.inProgress);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return(
        <>
            {
                listTasks.map(task => (
                    <Link to={`/${task.id}`} key={task.id} className="task">
                        {task.name}
                    </Link>
                ))
            }

            { listStatus === status.backlog && <AddTaskForm setIsClicked={setIsClicked} tasks={tasks} handleClick={handleClick} isClicked={isClicked} /> }
            
            { listStatus === status.ready && <MoveTaskForm getTasks={backlog} newStatus={status.ready} handleClick={handleClick} isClicked={isClicked} tasks={tasks} /> }

            { listStatus === status.inProgress && <MoveTaskForm getTasks={ready} newStatus={status.inProgress} handleClick={handleClick} isClicked={isClicked} tasks={tasks} /> }

            { listStatus === status.finished && <MoveTaskForm getTasks={inProgress} newStatus={status.finished} handleClick={handleClick} isClicked={isClicked} tasks={tasks} /> }
        </>
    )
}

export default List;