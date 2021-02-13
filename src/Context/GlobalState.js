import React, { useState } from 'react'

export const Todos = React.createContext()
export const TodoFormProvider = React.createContext()

function GlobalState({ children }) {
    const [todoItems, setTodoItems] = useState([])
    const [inProgressItems, setInProgressItems] = useState([])
    const [doneItems, setDoneItems] = useState([])
    const [todoForm, setTodoForm] = useState(<div></div>)
 
    return (
        <Todos.Provider value={
                {
                    todoItems,
                    setTodoItems,
                    inProgressItems,
                    setInProgressItems,
                    doneItems,
                    setDoneItems,
                }
            }
        >
            <TodoFormProvider.Provider value = {
                    {
                        todoForm,
                        setTodoForm
                    }
                }
            >
                { children }
            </TodoFormProvider.Provider>
        </Todos.Provider>
    )
}

export default GlobalState
