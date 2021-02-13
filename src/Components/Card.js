<<<<<<< HEAD
import React, { useContext } from 'react'
import Item from './Item'
import { Todos } from '../Context/GlobalState'

function Card({ name, items }) {

    return(
        <div className="bg-gray-100 w-1/5 rounded-lg text-center pt-5 pb-1">
                  
            <h1 className="text-green-400 text-2xl font-bold mb-8">{ name }</h1>

            {items.map(item => (
                    <Item
                        key={item.id} 
                        item={item}
                        name={name}
=======
import React from 'react'
import Item from './Item'


function Card(props) {

   
    
    return(
        <div className="bg-gray-100 w-1/5 rounded-lg text-center pt-5 pb-1">
                  
            <h1 className="text-green-400 text-2xl font-bold mb-8">{ props.name }</h1>

            {props.items.map(item => (
                    <Item
                        key={item.key} 
                        items={props.items}
                        item={item}
                        name={props.name} 
                        todoItems={props.todoItems}
                        setTodoItems={props.setTodoItems}
                        inProgressItems={props.inProgressItems}
                        setInProgressItems={props.setInProgressItems}
                        doneItems={props.doneItems}
                        setDoneItems={props.setDoneItems}
>>>>>>> d0c81de6a7815a289104c5a391ed35e999625b11
                    />
                ))}
            
        </div>
    )
}

export default Card