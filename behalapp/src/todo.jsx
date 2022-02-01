import React from 'react';

const Todo=(props)=>{
    return (
        <>
        <div className='main'>
        <i class="fa fa-times"
            onClick={()=>{
                props.onSelect(props.id);
            }}
        />
    <li>{props.text}</li>
    </div>
    </>
    )
};
export default Todo;