import React, { useContext } from 'react';
import TodoForm from './TodoForm'
import { TodoFormProvider } from '../Context/GlobalState'

function NewTask() {

    const { setTodoForm } = useContext(TodoFormProvider)

    function openTodoForm() {
        setTodoForm(<div>
            <TodoForm />
        </div>)
    }

    return(
        <div className="absolute top-16 right-9" onClick={openTodoForm}>
            <h3 className="text-green-400 text-lg bg-gray-100 px-5 py-2 font-bold cursor-pointer rounded-lg">New Task</h3>
        </div>
    )
}

export default NewTask