import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Post.css'
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo from '../../Photo/Photo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Post = () => {
    const { Id } = useParams();
    let {postID} = useParams();
    postID = Id
    
    const [post, setPost] = useState({})
    
    // Fetching to stack the posts
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    
    const [comment, setComment] = useState([]);
   
   // Fetching to stack the comments
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    
    const[photo,setPhoto]=useState([])
    
    // Fetching the pictures for the comments
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
        .then(res=>res.json())
        .then(data=>setPhoto(data.results))
    },[])
    const photoBook = photo.slice(1,comment.length+1)
    const classes = useStyles();
    return (

        <div className="post">
            
            <div className="main-post">
                <h1>{post.title}</h1>
                <p>Privacy : <FontAwesomeIcon icon={faCog}/> Custom</p>
                <p id='post'>"{post.body}"</p>
            </div>

            <div className="comment-section">
            <h1>Comments</h1>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item  xs={3}>
                            <Paper className={classes.paper}>{
                                photoBook.map(photo => <Photo key={photo.id.value} photo={photo}></Photo>)
                            }</Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>{
                                comment.map(comment => <Comment key={comment.id} photo={photo.url} comment={comment}></Comment>)
                            }</Paper>
                        </Grid>

                    </Grid>
                </div>


            </div>
        </div>
    );
};

export default Post;