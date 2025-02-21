'use client'
import React, { useState } from 'react';
import Task from '../../components/Task';

type Task = {
  id: string;
  title: string;
}

const TaskList = () => {

  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if(title === "") return
    const id = crypto.randomUUID();
    console.log(id);
    const newTasks = { id: id, title: title };
    setTasks([...tasks, newTasks]);
    setTitle("");
  }

  const handleUpdateTask = (id: string, title: string) => {
    setTasks((prevTasks) => (
      prevTasks.map((task) => (
        task.id === id ? { ...task, title } : task
      ))
    ))
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }


  return (
    <>

      <div className="flex">
        <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        <button type="button" onClick={handleAddTask}>タスクを追加</button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <Task id={task.id} title={task.title} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
          </div>
        ))}
      </div>

    </>
  )
}

export default TaskList