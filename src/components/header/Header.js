import React, { useState } from "react";

import userAvatar from '../../img/user-avatar.svg';

import './Header.css';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <header className="header">
            <div className="logo">Awesome Kanban Board</div>
            <div className="profile">
                <div className={`profile-image ${isClicked ? 'profile-image_active' : ''}`} onClick={handleClick}>
                    <img src={userAvatar} alt="avatar" />
                </div>
                <div className={`profile-menu ${isClicked ? 'profile-menu_active' : ''}`}>
                    <ul>
                        <li>Profile</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;