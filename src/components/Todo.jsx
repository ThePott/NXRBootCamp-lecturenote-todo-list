import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ButtonGroup, Button, Divider, Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

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

        const handleCompleted = (event) => {
            todo["completed"] = event.target.checked
            setTodoArray((prev) => [...prev])
        }

        console.log("---- checking re-render:", todo.content)
        return (
            <>
                <ListItem sx={{ paddingX: 0 }} className={isEditing ? `bg-amber-300` : ``}>
                    <Checkbox onChange={handleCompleted} />
                    <ListItemText primary={todo.content} />

                    <ButtonGroup variant="contained" aria-label="Basic button group">

                        <Button onClick={updateEditingTodoId} variant='outlined'>
                            <Typography variant="body1">
                                수정
                            </Typography>
                        </Button>

                        <Button onClick={() => deleteCurrentTodo(todo)} variant='contained'>
                            <Typography variant="body1">
                                삭제
                            </Typography>
                        </Button>

                    </ButtonGroup>
                </ListItem>
                <Divider component="li" />
            </>
        )
    }
)

export default Todo