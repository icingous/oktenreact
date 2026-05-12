const jpBaseUrl = 'https://jsonplaceholder.typicode.com';
const djBaseUrl = 'https://dummyjson.com';

const urls = {
  jp: {
    users: `${jpBaseUrl}/users`,
    posts: `${jpBaseUrl}/posts`,
    comments: `${jpBaseUrl}/comments`,
  },
  dj: {
    users: `${djBaseUrl}/users`,
    posts: `${djBaseUrl}/posts`,
    comments: `${djBaseUrl}/comments`,
  },
};

export default urls;
