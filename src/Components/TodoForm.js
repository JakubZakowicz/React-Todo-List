<<<<<<< HEAD
import React, { useState, useContext } from 'react'
import { Todos, TodoFormProvider } from '../Context/GlobalState'
import { v4 } from 'uuid'

function TodoForm() {

    const [text, setText] = useState('')

    const { todoItems, setTodoItems } = useContext(Todos)
    const { setTodoForm } = useContext(TodoFormProvider)

=======
import React, { useState } from 'react'

function TodoForm({todoItems, setTodoItems, setTodoForm, id, setId}) {

    const [text, setText] = useState('')
    
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
    function closeTodoForm() {
        setTodoForm(<div></div>)
    }

    function inputHandler(e) {
        setText(e.target.value)
        const alert = document.getElementById('alert')
        if(e.target.value === '') {
            e.target.style.border = '1px solid red'
            alert.style.display = 'block'
        } else {
            e.target.style.border = 'none'
            alert.style.display = 'none'
        }
    }

    function submitHandler(e) {
        e.preventDefault()
<<<<<<< HEAD
        if(text !== '') {
            setTodoItems([...todoItems, {id: v4(), text: text.charAt(0).toUpperCase() + text.slice(1)}])
=======
        
        if(text !== '') {
            setTodoItems([...todoItems, {key: id, text: text.charAt(0).toUpperCase() + text.slice(1)}])
            setId(id+1)
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
            closeTodoForm()
        } else {
            const input = document.querySelector('input')
            const alert = document.getElementById('alert')
            input.style.border = '1px solid red'
            alert.style.display = 'block'
        }
    }

    function validate(e) {
        const alert = document.getElementById('alert')
        if(e.target.value === '') {
            e.target.style.border = '1px solid red'
            alert.style.display = 'block'
        } else {
            e.target.style.border = 'none'
            alert.style.display = 'none'
        }
    }

    return(
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-2/3 h-1/6 bg-gray-100 absolute rounded-2xl shadow-md">
                <div className="w-full h-1/4 bg-green-400 rounded-t-2xl">
                    <h1 className="text-center text-white font-bold text-xl pt-1">Add Todo Item</h1>
                </div>
                <form className="flex justify-center items-center h-2/3">
                    <input className="w-1/2 p-3 rounded-l-2xl" placeholder="Add Todo..." onChange={inputHandler} onBlur={validate}/>
                    <button className="bg-green-400 text-white w-1/5 p-3 rounded-r-2xl" onClick={submitHandler}>Submit</button>
                   
                </form>
                <h3 id="alert" className="-mt-6 text-center -ml-48 text-red-600 hidden">You have to fill the form to submit</h3>
                <div className="bg-gray-100 absolute px-3 py-1 rounded-full border-2 border-green-400 cursor-pointer -top-4 -right-4" onClick={closeTodoForm}>
                    <span className="font-bold text-lg text-green-400">X</span>
                </div>
            </div>
        </div>
    )
}

export default TodoForm