import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './DashBoard.css';
import OwnProfile from '../OwnProfile/OwnProfile';
import NewsFeed from '../NewsFeed/NewsFeed';
import { Link } from 'react-router-dom';
import Friends from '../Friends/Friends';

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

const DashBoard = () => {
  const [newsfeed, setNewsfeed] = useState([]);
  
  // initializing posts for the newsfeed
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setNewsfeed(data))
  }, [])

  const [friends, setFriends] = useState([]);
  
  // initializing online friends
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])


  const classes = useStyles();

  return (
    <div className="dashboard-container">

      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={8} sm={3}>
            <Paper className={`profile ${classes.paper}`}> <OwnProfile></OwnProfile> </Paper>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Paper className={classes.paper}>
              <h1>NewsFeed</h1>
              {
                newsfeed.map(feed => <NewsFeed key={feed.id} feed={feed}></NewsFeed>)
              }
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <h1>Active Friends</h1>
              {
                friends.map(friends => <Friends key={friends.id} friends={friends}></Friends>)
              }

            </Paper>
          </Grid>
        </Grid>
      </div>


    </div>
  );
};

export default DashBoard;