//This is not our reducer. It is an action creator. The return statement with type and payload contained here is our action.
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=fib112358132134';


// This action creator will reach out and fetch our blog posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${KEY}`, values)
  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}
