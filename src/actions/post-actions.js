import { FETCH_POST, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    console.log('fetching');
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => dispatch({
            type: FETCH_POST,
            payload: res.data
        }));
}

export const submitPost = (post) => dispatch => {
    console.log('submitting');
    axios.post("https://jsonplaceholder.typicode.com/posts", post)
        .then(res => dispatch({
            type: NEW_POST,
            payload: res.data
        }));
}