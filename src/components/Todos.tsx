import { useEffect, useState } from 'react';
import type { ITodo } from '../models/ITodo';
import { getTodos } from '../services/api.service';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <section className='p-4'>
      <h2 className='font-bold text-4xl mb-4'>Todos</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default Todos;
