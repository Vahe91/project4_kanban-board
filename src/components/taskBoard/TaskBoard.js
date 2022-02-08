import React from "react";

import status from '../../status';
import List from "../list/List";

import './TaskBoard.css'

const TaskBoard = ({ tasks, setTasks, addNewTask }) => {
    return (
        <>
            {
                Object.values(status).map(listStatus => {
                    const listTasks = tasks.filter(task => task.status === listStatus);
                    return(
                        <div className="task-block" key={listStatus}>
                            <h2 className="task-block__title">{listStatus}</h2>
                            <div className="list">
                                <List 
                                    listStatus={listStatus} 
                                    tasks={tasks} 
                                    status={status} 
                                    listTasks={listTasks || []}
                                    addNewTask={addNewTask}
                                    setTasks={setTasks} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TaskBoard;