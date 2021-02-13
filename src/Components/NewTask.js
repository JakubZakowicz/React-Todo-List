<<<<<<< HEAD
import React, { useContext } from 'react';
import TodoForm from './TodoForm'
import { Todos, TodoFormProvider } from '../Context/GlobalState'

function NewTask() {

    const { setTodoForm } = useContext(TodoFormProvider)

    function openTodoForm() {
        setTodoForm(<div>
            <TodoForm />
=======
import React, { useState } from 'react';
import TodoForm from './TodoForm'

function NewTask({ setTodoForm, todoItems, setTodoItems }) {

    const [id, setId] = useState(0)

    function openTodoForm() {
        setTodoForm(<div>
            <TodoForm
                setTodoForm={setTodoForm}
                todoItems={todoItems}
                setTodoItems={setTodoItems}
                id = {id}
                setId = {setId}
            />
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
        </div>)
    }

    return(
        <div className="absolute top-16 right-9" onClick={openTodoForm}>
            <h3 className="text-green-400 text-lg bg-gray-100 px-5 py-2 font-bold cursor-pointer rounded-lg">New Task</h3>
        </div>
    )
}

export default NewTask