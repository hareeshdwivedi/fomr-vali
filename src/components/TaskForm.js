import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

function TaskForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Clear the form
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        label="Task Name"
        {...register("name", { required: true })}
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        label="Description"
        {...register("description")}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Task
      </Button>
    </Box>
  );
}

export default TaskForm;
