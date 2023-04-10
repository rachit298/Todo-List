import React, { useReducer } from "react";
import TodoCtx from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./TodoActions";

function TodoState(props) {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  function addTodo(todo) {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  }

  function toggleTodo(todoId) {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId,
    });
  }

  function deleteTodo(todoId) {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  }

  return (
    <TodoCtx.Provider
      value={{ todos: state.todos, addTodo, toggleTodo, deleteTodo }}
    >
      {props.children}
    </TodoCtx.Provider>
  );
}

export default TodoState;
