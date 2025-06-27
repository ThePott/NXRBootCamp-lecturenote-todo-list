import { useStateValueContext } from "../hooks"
import MemoizedTodo from "./Todo"

const TodoList = () => {
  const context = useStateValueContext()
  const todoArray = context

  console.log("---- re-rendering todo list:", todoArray)
  if (!todoArray) { return null }
  
  return (
    <ul>
      {todoArray.map((todo) => <MemoizedTodo key={todo.id} todoId={todo.id} todoContent={todo.content} />)}
    </ul>
  )
}

export default TodoList