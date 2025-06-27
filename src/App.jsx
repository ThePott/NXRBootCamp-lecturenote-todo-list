import React, { useState } from 'react'
import dummyData from "./dummy-data.json"

const Todo = React.memo(
  ({ todo, setTodoArray }) => {
    const deleteCurrentTodo = (todo) => {
      console.log("---- delete todo:", todo.content)
      setTodoArray((prev) => {
        const filteredArray = prev.filter((remaining) => remaining.id !== todo.id)
        return filteredArray
      })
    }

    console.log("---- re-rendering todo:", todo.content)

    return (
      <li>
        {todo.content}
        <button>수정</button>
        <button onClick={() => deleteCurrentTodo(todo)}>삭제</button>
      </li>
    )
  }
)


const App = () => {
  const [todoArray, setTodoArray] = useState(dummyData)

  const [newContent, setnewContent] = useState("")
  const addnewContent = () => {
    console.log("---- new content:", newContent)

    const newTodo = {
      id: Number(new Date()),
      content: newContent
    }
    setTodoArray([...todoArray, newTodo])

  }

  console.log("---- re-rendering app")
  return (
    <div>
      <ul>
        {todoArray.map((todo) => <Todo key={todo.id} todo={todo} setTodoArray={setTodoArray} />)}
      </ul>
      <input type="text" onChange={(event) => setnewContent(event.target.value)} />
      <button onClick={addnewContent}>추가하기</button>
    </div>
  )
}

export default App