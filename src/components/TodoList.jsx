import Todo from './Todo'

const TodoList = ({ todoArray, setTodoArray, editingTodoId, setEditingTodoId }) => {
    return (
        <ul>
            {todoArray.map((todo) => (
                <Todo 
                key={todo.id} 
                todo={todo} 
                setTodoArray={setTodoArray} 
                isEditing={editingTodoId === todo.id} 
                setEditingTodoId={setEditingTodoId} />
            ))}
        </ul>
    )
}

export default TodoList