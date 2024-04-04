import { CiEdit, CiTrash } from "react-icons/ci"
import { TodoType } from "../types"


interface Props {
    task:TodoType;
    deleteTodo: (id:number) => void
    editTodo:(id:number) => void
    toggleComplete:(id:number) => void
}

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}:Props) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <CiEdit className="edit-icon" onClick={() => editTodo(task.id)} />
        <CiTrash className="delete-icon"  onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}