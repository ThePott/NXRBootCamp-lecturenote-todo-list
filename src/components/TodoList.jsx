import Todo from './Todo'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const TodoList = ({ todoArray, setTodoArray, editingTodoId, setEditingTodoId }) => {
    if (!todoArray) { return null }
    return (
        <List>
            {todoArray.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    setTodoArray={setTodoArray}
                    isEditing={editingTodoId === todo.id}
                    setEditingTodoId={setEditingTodoId} />
            ))}
        </List>
        // <ul>
        // </ul>
    )
}

export default TodoList