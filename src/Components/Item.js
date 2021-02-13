<<<<<<< HEAD
 import React, { useContext } from 'react'
 import { Todos } from '../Context/GlobalState'

function Item({ name, item }) {

    const { todoItems, setTodoItems } = useContext(Todos)
    const { inProgressItems, setInProgressItems } = useContext(Todos)
    const { doneItems, setDoneItems } = useContext(Todos)
=======
import React from 'react'

function Item(props) {
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11

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
<<<<<<< HEAD
            addItem(setInProgressItems, inProgressItems, item)
            deleteItem(setTodoItems, todoItems, item)
        } else if(e.button === 1) {
            deleteItem(setTodoItems, todoItems, item)
=======
            addItem(props.setInProgressItems, props.inProgressItems, props.item)
            deleteItem(props.setTodoItems, props.todoItems, props.item)
        } else if(e.button === 1) {
            deleteItem(props.setTodoItems, props.todoItems, props.item)
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
        }
        
    }

    function moveToDoneItems(e) {

        if(e.button === 0) {
<<<<<<< HEAD
            addItem(setDoneItems, doneItems, item)
        } else if(e.button === 2) {
            addItem(setTodoItems, todoItems, item)
        }
        deleteItem(setInProgressItems, inProgressItems, item)
=======
            addItem(props.setDoneItems, props.doneItems, props.item)
        } else if(e.button === 2) {
            addItem(props.setTodoItems, props.todoItems, props.item)
        }
        deleteItem(props.setInProgressItems, props.inProgressItems, props.item)
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
    }

    function moveFromDoneItems(e) {
        if(e.button === 2) {
<<<<<<< HEAD
            addItem(setInProgressItems, inProgressItems, item)
            deleteItem(setDoneItems, doneItems, item)
        } else if(e.button === 1) {
            deleteItem(setDoneItems, doneItems, item)
=======
            addItem(props.setInProgressItems, props.inProgressItems, props.item)
            deleteItem(props.setDoneItems, props.doneItems, props.item)
        } else if(e.button === 1) {
            deleteItem(props.setDoneItems, props.doneItems, props.item)
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
        }
    }

    function disableContextMenu(e) {
        e.preventDefault()
    }

    // Deploying items
<<<<<<< HEAD
    if(name === 'To do') {
=======
    if(props.name === 'To do') {
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
        return (
            <h1
                className="bg-white w-11/12 mx-auto py-2 text-gray-500 text-xl border border-green-400 rounded-lg cursor-pointer my-3"
                onMouseDown={moveToInProgress} 
                onContextMenu={disableContextMenu}
            >
<<<<<<< HEAD
                { item.text }
            </h1>
        )
    } else if(name === 'In progress') {
=======
                { props.item.text }
            </h1>
        )
    } else if(props.name === 'In progress') {
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
        return (
            <h1 
                className="bg-white w-11/12 mx-auto py-2 text-gray-500 text-xl border border-purple-400 rounded-lg cursor-pointer my-3" 
                onMouseDown={moveToDoneItems}
                onContextMenu={disableContextMenu}
            >
<<<<<<< HEAD
                { item.text }
=======
                { props.item.text }
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
            </h1>
        )
    } else {
        return (
            <h1
                className="bg-gray-300 w-11/12 mx-auto py-2 text-gray-600 text-xl rounded-lg cursor-pointer my-3"
                onMouseDown={moveFromDoneItems}
                onContextMenu={disableContextMenu}
            >
<<<<<<< HEAD
                { item.text }
=======
                { props.item.text }
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
            </h1>
        )
    }
}

export default Item