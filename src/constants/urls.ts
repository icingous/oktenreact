const jpBaseUrl = 'https://jsonplaceholder.typicode.com';
const djBaseUrl = 'https://dummyjson.com';

const urls = {
  jp: {
    users: {
      all: `${jpBaseUrl}/users`,
    },
    posts: {
      all: `${jpBaseUrl}/posts`,
    },
    comments: {
      all: `${jpBaseUrl}/comments`,
    },
  },
  dj: {
    users: {
      all: `${djBaseUrl}/users`,
    },
    posts: {
      all: `${djBaseUrl}/posts`,
    },
    comments: {
      all: `${djBaseUrl}/comments`,
    },
  },
};

export default urls;
