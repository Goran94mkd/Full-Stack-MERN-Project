import React from 'react';
import { useSelector } from 'react-redux'; // fetch the data from the global redux store

import Post from './Post/Post'

import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts )
  const classes = useStyles();

  console.log(posts)

  return (
    <>
      <h1 >POSTS</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts