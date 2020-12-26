import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};