import React, {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import TodoForm from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import Modal from '../Modal';
import EmptyTodos from '../EmptyTodos';
import TodosLoading from '../TodosLoading';


function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal 
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Hubo un error, espera...</p>}
            {loading && <TodosLoading/>}
            {!loading && !searchedTodos.length && 
            <EmptyTodos/>}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      {!!openModal && (
        <Modal>
          <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
        <TodoForm/>
     </Modal>
      )}
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
    </React.Fragment>
  );
}

export { AppUI };
