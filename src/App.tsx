import Todos from './components/todos/Todos';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import './App.css';
// import { getComments } from './services/api.service';
// import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   getComments().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Comments />
      <Posts />
      <Todos />;
    </>
  );
}

export default App;
