'use client'
import React, { useState } from 'react';

type Task = {
  id: string;
  title: string;
}

const TaskList = () => {

  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEdit, setEdit] = useState<boolean>(false);

  const addTask = () => {
    const id = crypto.randomUUID();
    console.log(id);
    const newTasks = { id: id, title: title };
    setTasks([...tasks, newTasks]);
    setTitle("");
  }

  const editTask = () => {
    setEdit(true);
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const updateTask = (id: string) => {
  }

  const cancel = () => {
    setEdit(false);
  }


  return (
    <>

      <div className="flex">
        <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        <button type="button" onClick={addTask}>タスクを追加</button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            {isEdit ? (
              <div className="flex">
                <input type="text" value={task.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                <button onClick={() => updateTask(task.id)}>更新</button>
                <button onClick={cancel}>キャンセル</button>
              </div>
            ): (
              <div className="flex">
                <div>{task.title}</div>
                <button onClick={editTask}>編集</button>
                <button onClick={() => deleteTask(task.id)}>削除</button>
              </div>
            )}

          </div>
        ))}
      </div>

    </>
  )
}

export default TaskList