import React from 'react'

const Todo = React.memo(
    // 아마 여기서 원시 타입으로 받아야 할 거 같은데
    // 아니다 배열 안에 들어있는 원소는 여전히 객체이고 spread로 복사를 해도 객체는 여전히 같은 게 참조된다. (얕은 복사)
    // 따라서 setTodoArray 이전과 이후의 todo는 같은 객체이다.
    ({ todo, setTodoArray, isEditing, setEditingTodoId }) => {
        
        const deleteCurrentTodo = (todo) => {
            setTodoArray((prev) => {
                const filteredArray = prev.filter((remaining) => remaining.id !== todo.id)
                return filteredArray
            })
        }
        const updateEditingTodoId = () => {
            setEditingTodoId(todo.id)
        }

        console.log("---- checking re-render:", todo.content)
        return (
            <li>
                {isEditing && `현재 수정중!`}
                {todo.content}
                <button onClick={updateEditingTodoId}>수정</button>
                <button onClick={() => deleteCurrentTodo(todo)}>삭제</button>
            </li>
        )
    }
)

export default Todo