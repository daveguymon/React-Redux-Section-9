//This is not our reducer. It is an action creator. The return statement with type and payload contained here is our action.
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=fib112358132134'


// This action creator will reach out and fetch our blog posts
export function FetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
