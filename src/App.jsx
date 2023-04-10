import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import "./App.css";

import TodoState from "./Context/TodoState";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__todoApp">
          <TodoState>
            <TodoInput />
            <TodoList />
          </TodoState>
        </div>
      </div>
    </>
  );
}

export default App;
