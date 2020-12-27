import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonplaceholder.get('/posts');

  dispatch ({
    type: 'FETCH_POSTS',
    payload: data
  });
};

export const fetchUser = id => async dispatch => {

  const { data } = await jsonplaceholder.get(`/users/${id}`);

  dispatch ({
    type: 'FETCH_USER',
    payload: data
  });
};


// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonplaceholder.get(`/users/${id}`);

//   dispatch ({
//     type: 'FETCH_USER',
//     payload: data
//   });
// });