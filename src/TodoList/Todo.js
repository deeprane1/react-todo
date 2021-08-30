import React from 'react'

import done from './done.svg'
import cross from './cross.svg'

function Todo( props )
{
    return (
        <div className='todo-item'>
            <div Style='display: flex; 
                        justify-content: center; 
                        align-items: end;
                        width: auto'>
                <div Style='flex: 0 1 auto' className='text-l'>{props.todo.content}</div>
                <div Style='flex: 0 1 auto; width: 20px; margin-left: 1rem' > 
                    <img 
                        className="todo-action" 
                        src={props.todo.done ? done : cross} 
                        alt="status" 
                        onClick = { e => props.delete(props.index) }
                    />
                </div>

            </div>
        </div>
    )
}

export default Todo