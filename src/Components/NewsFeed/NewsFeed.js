import React from 'react';
import './NewsFeed.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const NewsFeed = (props) => {
    const {title,body,id} = props.feed
    return (
        <div className='newsfeed' >
        <h2 id='title'>{title}</h2>
        <p>Privacy : <FontAwesomeIcon icon={faCog}/> Custom</p>
        <p>{body}</p>
        <Button variant="contained" color="primary"><Link to={`/posts/${id}`}><span className='see-more'>See More</span></Link></Button>
        
        </div>
        
    );
};

export default NewsFeed;

