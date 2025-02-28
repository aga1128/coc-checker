import React, { useState } from 'react';

type Props = {
  id: string;
  title: string;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

const Task = ({ id, title, onUpdate, onDelete }: Props) => {

  const [editingTitle, setEditingTitle] = useState<string>(title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const editTask = () => {
    setIsEdit(true);
  }

  const deleteTask = (id: string) => {
    onDelete(id);
  }

  const updateTask = (id: string) => {
    onUpdate(id, editingTitle);
    setIsEdit(false);
  }

  const cancel = () => {
    setIsEdit(false);
    setEditingTitle(title);
  }

  return (
    <>
      {isEdit ? (
        <div className="flex">
          <input type="text" value={editingTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditingTitle(e.target.value)} />
          <button onClick={() => updateTask(id)}>更新</button>
          <button onClick={cancel}>キャンセル</button>
        </div>
      ): (
        <div className="flex">
          <div>{title}</div>
          <button onClick={editTask}>編集</button>
          <button onClick={() => deleteTask(id)}>削除</button>
        </div>
      )}
    </>
  )
}

export default Task