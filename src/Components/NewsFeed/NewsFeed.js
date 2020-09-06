import React from 'react';
import './NewsFeed.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NewsFeed = (props) => {
    const {title,body,id} = props.feed
    return (
        <div className='newsfeed' >
        <h2>{title}</h2>
        <small>privacy : friends</small>
        <br/>
        <p>{body}</p>
        <Button variant="contained" color="primary"><Link to={`/posts/${id}`}>See More</Link></Button>
        
        </div>
        
    );
};

export default NewsFeed;

