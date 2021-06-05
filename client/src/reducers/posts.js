import { FETCH_ALL, CREATE} from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; // action.payload are our actual posts
    case CREATE:
      return posts;

    default:
      return posts;
  }
};