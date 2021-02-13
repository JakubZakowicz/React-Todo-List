<<<<<<< HEAD
import React, { useContext } from 'react'
import NewTask from './NewTask'
import Card from './Card'
import { Todos, TodoFormProvider } from '../Context/GlobalState'

function Board({ setTodoForm }) {

    const { todoItems } = useContext(Todos)
    const { inProgressItems } = useContext(Todos)
    const { doneItems } = useContext(Todos)
    const { todoForm } = useContext(TodoFormProvider)

    return(
        <div className="h-screen bg-gray-100">
            <div className="w-5/6 h-full flex items-center justify-center flex-col mx-auto relative">
                <div className="bg-green-400 w-full h-1/4 rounded-t-xl shadow-lg"></div>
                <div className="bg-white w-full h-2/3 rounded-b-xl shadow-lg"></div>

                <div className="flex justify-around absolute w-full top-48 left-0 flex-wrap items-start" onContextMenu={(e) => e.preventDefault()}>
                    <Card
                        items={todoItems} 
                        name="To do"
                    />
                    <Card 
                        items={inProgressItems} 
                        name="In progress"
                    />
                    <Card 
                        items={doneItems} 
                        name="Done"
                    />
                </div>
                
                <NewTask 
                    setTodoForm={setTodoForm}
                />
        
            </div>
            {todoForm}
        </div>
        
=======
import React, { useState } from 'react'
import NewTask from './NewTask'
import Card from './Card'

function Board({ setTodoForm }) {

    const[todoItems, setTodoItems] = useState([])

    const[inProgressItems, setInProgressItems] = useState([])

    const[doneItems, setDoneItems] = useState([])

    return(
        <div className="w-5/6 h-full flex items-center justify-center flex-col mx-auto relative">
            <div className="bg-green-400 w-full h-1/4 rounded-t-xl shadow-lg"></div>
            <div className="bg-white w-full h-2/3 rounded-b-xl shadow-lg"></div>

            <div className="flex justify-around absolute w-full top-48 left-0 flex-wrap items-start" onContextMenu={(e) => e.preventDefault()}>
                <Card
                    items={todoItems} 
                    name="To do"
                    todoItems={todoItems}
                    setTodoItems={setTodoItems}
                    inProgressItems={inProgressItems}
                    setInProgressItems={setInProgressItems}
                    doneItems={doneItems}
                    setDoneItems={setDoneItems}
                />
                <Card 
                    items={inProgressItems} 
                    name="In progress"
                    todoItems={todoItems}
                    setTodoItems={setTodoItems}
                    inProgressItems={inProgressItems}
                    setInProgressItems={setInProgressItems}
                    doneItems={doneItems}
                    setDoneItems={setDoneItems}
                />
                <Card 
                    items={doneItems} 
                    name="Done"
                    todoItems={todoItems}
                    setTodoItems={setTodoItems}
                    inProgressItems={inProgressItems}
                    setInProgressItems={setInProgressItems}
                    doneItems={doneItems}
                    setDoneItems={setDoneItems}
                />
             </div>
            
            <NewTask 
                setTodoForm={setTodoForm} 
                todoItems={todoItems} 
                setTodoItems={setTodoItems}
            />
    
        </div>
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
    )
}

export default Board