import React from "react";

import './Footer.css';

const Footer = ({ tasks }) => {

    const activeTasks = tasks.filter(task => task.status === 'Backlog');
    const finishedTasks = tasks.filter(task => task.status === 'Finished');

    return(
        <div className="footer">
            <div className="footer__tasks-info">
                <span>Active tasks: {activeTasks.length}</span>
                <span>Finished tasks: {finishedTasks.length}</span>
            </div>
            <p>Kanban board by Vahe, 2022</p>
        </div>
    )
}

export default Footer;