import React from 'react';
import './Friends.css'

const Friends = (props) => {
    const {name} = props.friends
    return (
        <div className='friends-list' >
        <small>{name}</small>
            
        </div>
    );
};

export default Friends;