import React from 'react'
import Item from './Item'

function Card({ name, items }) {

    return(
        <div className="bg-gray-100 w-1/5 rounded-lg text-center pt-5 pb-1">
                  
            <h1 className="text-green-400 text-2xl font-bold mb-8">{ name }</h1>

            {items.map(item => (
                    <Item
                        key={item.id} 
                        item={item}
                        name={name}
                    />
                ))}
            
        </div>
    )
}

export default Card