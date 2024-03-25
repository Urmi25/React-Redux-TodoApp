import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";

const TodoForm = ({ onSaveTodo,type,id }) => {
  console.log(id);
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id: Date.now(),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTodo({ title: "", description: "", id: Date.now() });
  };


  const handleSave = () => {
    onSaveTodo(todo);
    setTodo({ title: "", description: "", id: Date.now() });
    handleClose();
  };

  return (
    <div>
     {
      type=='add-todo' &&  <Button
      variant="outlined"
      color="primary"
      onClick={handleClickOpen}
      style={{ marginBottom: "2rem" }}
    >
      Add Todo
    </Button>
     }
     {
      type=='edit' && <IconButton
      edge="end"
      aria-label="edit"
      onClick={handleClickOpen}
    >
      <EditOutlined/>
    </IconButton>
     }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;