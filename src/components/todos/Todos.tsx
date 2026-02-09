import { useEffect, useState } from 'react';
import type { ITodo } from '../../models/ITodo';
import { getTodos } from '../../services/api.service';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <div className='w-full p-5'>
      <section className='max-w-2xl mx-auto flex flex-col'>
        <h2 className='font-bold text-4xl mb-4'>Todos</h2>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
};

export default Todos;
