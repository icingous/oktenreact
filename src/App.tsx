import Todos from './components/todos/Todos';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import './App.css';

function App() {
  return (
    <>
      <Comments />
      <Posts />
      <Todos />;
    </>
  );
}

export default App;
