 import React, { useContext } from 'react'
 import { Todos } from '../Context/GlobalState'

function Item({ name, item }) {

    const { todoItems, setTodoItems } = useContext(Todos)
    const { inProgressItems, setInProgressItems } = useContext(Todos)
    const { doneItems, setDoneItems } = useContext(Todos)

    // Add and Delete Item
    function addItem(setItems, items, item) {
        setItems([...items, item])
    }

    function deleteItem(setItems, items, item) {
        setItems(items.filter(it => {
            return it.key !== item.key
        }))
    }

    // Moving Items
    function moveToInProgress(e) {

        if(e.button === 0) {
            addItem(setInProgressItems, inProgressItems, item)
            deleteItem(setTodoItems, todoItems, item)
        } else if(e.button === 1) {
            deleteItem(setTodoItems, todoItems, item)
        }
        
    }

    function moveToDoneItems(e) {

        if(e.button === 0) {
            addItem(setDoneItems, doneItems, item)
        } else if(e.button === 2) {
            addItem(setTodoItems, todoItems, item)
        }
        deleteItem(setInProgressItems, inProgressItems, item)
    }

    function moveFromDoneItems(e) {
        if(e.button === 2) {
            addItem(setInProgressItems, inProgressItems, item)
            deleteItem(setDoneItems, doneItems, item)
        } else if(e.button === 1) {
            deleteItem(setDoneItems, doneItems, item)
        }
    }

    function disableContextMenu(e) {
        e.preventDefault()
    }

    // Deploying items
    if(name === 'To do') {
        return (
            <h1
                className="bg-white w-11/12 mx-auto py-2 text-gray-500 text-xl border border-green-400 rounded-lg cursor-pointer my-3"
                onMouseDown={moveToInProgress} 
                onContextMenu={disableContextMenu}
            >
                { item.text }
            </h1>
        )
    } else if(name === 'In progress') {
        return (
            <h1 
                className="bg-white w-11/12 mx-auto py-2 text-gray-500 text-xl border border-purple-400 rounded-lg cursor-pointer my-3" 
                onMouseDown={moveToDoneItems}
                onContextMenu={disableContextMenu}
            >
                { item.text }
            </h1>
        )
    } else {
        return (
            <h1
                className="bg-gray-300 w-11/12 mx-auto py-2 text-gray-600 text-xl rounded-lg cursor-pointer my-3"
                onMouseDown={moveFromDoneItems}
                onContextMenu={disableContextMenu}
            >
                { item.text }
            </h1>
        )
    }
}

export default Item