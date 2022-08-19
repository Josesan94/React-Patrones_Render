import React, {useContext, useState} from 'react'
import { TodoContext } from '../TodoContext';
import './todoForm.css'


const TodoForm = () => { 
  const [newTodoValue, setNewTodoValue] = useState('')
  const { addTodo, setOpenModal }  = useContext(TodoContext)

  const handleChange = (e) => {
    setNewTodoValue(e.target.value)
  }
  
  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            placeholder="Cortar la cebolla para el almuerzo"
            value={newTodoValue}
            onChange={handleChange}
        />
        <div className='TodoForm-buttonContainer'>
          <button type="button" onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>
            Cancelar
          </button>
          <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;