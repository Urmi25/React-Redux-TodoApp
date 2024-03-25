import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Proptypes from "prop-types";

import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/todosSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "transform 0.3s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px 3px ${theme.palette.primary.main}",
      transform: "scale(1.02)",
    },
  },
}));


const TodoCard = ({ todo, onDeleteTodo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  

  const handleEditTodo = (updatedTodo) => {
    console.log("updatedTodo:",updatedTodo);
    dispatch(editTodo(updatedTodo)); 
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {todo.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            whiteSpace: "normal",
            maxHeight: showFullDescription ? "none" : "3em",
            overflow: "hidden",
            justifyContent: "stretch",
          }}
        >
          {todo.description}
        </Typography>
        {todo.description.length > 100 && (
          <IconButton onClick={handleToggleDescription}>
            {showFullDescription ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
        <TodoForm onSaveTodo={handleEditTodo} type="edit" id={todo.id} />
      </CardContent>
    </Card>
  );
};

TodoCard.propTypes = {
  todo: Proptypes.object,
  onDeleteTodo: Proptypes.func,
  onEditTodo: Proptypes.func,
};

export default TodoCard;