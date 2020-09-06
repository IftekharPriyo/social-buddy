import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faComments } from '@fortawesome/free-solid-svg-icons'

const OwnProfile = () => {
    return (
        <div className='profile'>
            <img src="./person.png" alt="image" />
            <h3>Iftekhar Ali</h3>
            <a href="">Edit Profile</a>
            <div className='shortcuts'>
                <p><FontAwesomeIcon icon={faUsers} /> Groups</p>
                <p><FontAwesomeIcon icon={faUsers} /> Friends</p>
                <p><FontAwesomeIcon icon={faComments} /> Messenger</p>
            </div>
        </div>
    );
};

export default OwnProfile;