import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useForm, Controller } from "react-hook-form";

function TaskList({ tasks, onEdit, onDelete }) {
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState({});
  const [editedTaskId, setEditedTaskId] = React.useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOpenEditDialog = (taskId, taskName, taskDescription) => {
    setEditedTaskId(taskId);
    setEditedTask({ name: taskName, description: taskDescription });
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleEditTask = (data) => {
    onEdit(editedTaskId, data);
    setOpenEditDialog(false);
  };

  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.name} secondary={task.description} />
            <IconButton
              edge="end"
              onClick={() =>
                handleOpenEditDialog(task.id, task.name, task.description)
              }
            >
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => onDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleEditTask)}>
            <Controller
              name="name"
              control={control}
              defaultValue={editedTask.name}
              rules={{ required: "Task Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  margin="dense"
                  label="Task Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name && errors.name.message}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue={editedTask.description}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Description"
                  fullWidth
                  error={!!errors.description}
                  helperText={errors.description && errors.description.message}
                />
              )}
            />
            <DialogActions>
              <Button onClick={handleCloseEditDialog}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TaskList;
