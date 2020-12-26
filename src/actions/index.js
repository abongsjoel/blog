import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonplaceholder.get('/posts');

  dispatch ({
    type: 'FETCH_POSTS',
    payload: data
  });
};

// export const fetchUser = id => async dispatch => {
//   const { data } = await jsonplaceholder.get(`/users/${id}`);

//   dispatch ({
//     type: 'FETCH_USER',
//     payload: data
//   })
// }

export const fetchUser = function(id) { 
  return _.memoize(async function(dispatch)  {
    const { data } = await jsonplaceholder.get(`/users/${id}`);

    dispatch ({
      type: 'FETCH_USER',
      payload: data
    });
  });
};