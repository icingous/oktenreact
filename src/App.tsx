import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const users = useFetch<{ id: number; name: string }>(
    'http://jsonplaceholder.typicode.com/users',
  );

  return (
    <>
      {users.map(({ id, name }) => (
        <div key={id}>{`${id} ${name}`}</div>
      ))}
    </>
  );
}

export default App;
