import React, { useState, useContext } from "react";
import styles from "./TodoInput.module.css";

import TodoCtx from "../../Context/TodoContext";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoCtx);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // {id: 111, text: 'Some text', complete: false}
    const newTodo = {
      id: Math.random(),
      text: todo,
      complete: false,
    };

    addTodo(newTodo);

    setTodo("");
  };

  return (
    <div className={styles.todoInput}>
      <h3 className={styles.todoInput__title}>
        useCONTEXT + useREDUCER TO-DO LIST
      </h3>
      <form onSubmit={onSubmitHandler} className={styles.todoInput__form}>
        <input
          className={styles.todoInput__input}
          type="text"
          value={todo}
          placeholder="Enter a Todo..."
          onChange={onChangeHandler}
        />
        <button className={styles.todoInput__submitBtn}>ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;