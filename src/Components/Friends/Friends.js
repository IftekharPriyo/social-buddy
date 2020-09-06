import React from 'react';
import './Friends.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
const Friends = (props) => {
    const {name} = props.friends
    return (
        <div className='friends-list' >
        <h4><FontAwesomeIcon icon={faCircle}/><span id='friend-name'>{name}</span></h4>
        </div>
    );
};

export default Friends;