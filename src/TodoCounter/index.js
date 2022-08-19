import React, {useContext} from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter() {
  const { totalTodos: total , completedTodos:completed } = useContext(TodoContext)
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };
