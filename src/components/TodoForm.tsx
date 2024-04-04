import  React, {useState} from 'react'

interface Props{
  addTodo:(val:string) => void
}
export const TodoForm = ({addTodo}:Props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}