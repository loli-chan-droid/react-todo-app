import React, {useState} from 'react'
import { TodoType } from '../types';

interface Props {
  editTodo:(t:string,id:number ) => void
  task:TodoType
}
export const EditTodoForm = ({editTodo, task}:Props) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e:React.FormEvent) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}