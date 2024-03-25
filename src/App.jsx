import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./redux/todosSlice"; // Import editTodo
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    console.log(todo);
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };



  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Todo App
      </Typography>
      <TodoForm onSaveTodo={handleAddTodo} type="add-todo" />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}  />
    </Container>
  );
}

export default App;