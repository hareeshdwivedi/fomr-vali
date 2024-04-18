import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask, editTask, deleteTask } = useTasks();

  const handleEditTask = (taskId, updatedTask) => {
    editTask(taskId, updatedTask);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Exercise
          </Typography>
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            Tasks
          </Link>
          <Link
            to="/users"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Users
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TaskForm onSubmit={addTask} />
                <TaskList
                  tasks={tasks}
                  onEdit={handleEditTask} // Pass the handleEditTask function
                  onDelete={deleteTask}
                />
              </>
            }
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
