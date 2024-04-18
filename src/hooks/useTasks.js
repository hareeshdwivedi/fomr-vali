import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, { ...task, id: Date.now() }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, editTask, deleteTask };
};
