import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonplaceholder.get('/posts');

  dispatch ({
    type: 'FETCH_POSTS',
    payload: data
  });
};

export const fetchUser = id => async dispatch => {
  const { data } = await jsonplaceholder.get(`/user/${id}`);

  dispatch ({
    type: 'FETCH_USER',
    payload: data
  })
}