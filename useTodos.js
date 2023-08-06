import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'


const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

}



export const useTodo = () => {


  const [todos, dispatch] = useReducer( todoReducer, [] , init)

  useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ))


  }, [todos])

  const todosCount = todos.length;

  const todosPending = todos.filter(todo => !todo.done).length;

 

  const handleNewTodo = ( todo ) => {
     
     const action ={
      type: '[TODO] Add Todo',
     payload: todo
  }

  dispatch( action );

  }

  const handledete = ( id ) => {
      dispatch({
          type: '[TODO] Remove Todo',
          payload: id
      })

  }

  const handleToggleTodo = (id) => {
     
      dispatch({
          type: '[TODO] Toogle Todo',
          payload: id

      })
  }

    

  return {
    todos,
    todosCount,
    todosPending,
    handleNewTodo,
    handleToggleTodo,
    handledete


  }
}
