import React, { useState } from 'react';
import Todo from './todo';

const App=()=>{
const [inputlist,setinputlist] = useState();
const [items,setitems]= useState([]);

const itemEvent = (e)=>{
    setinputlist(e.target.value);
}
const listofitems=()=>{
    setitems((olditems)=>{
        return [...olditems,inputlist];
    });
    setinputlist("");
};
const deleteitem=(id)=>{
    setitems((olditems)=>{
        return olditems.filter((abc,index)=>{
            return index !== id;
        });
    });
}

    return(
        <>
        <div className='poora'>
        <div className='welcome'>
        <h1>WELCOME</h1>
        </div>
            <div className='masla'>
                <div className='dabba'>
                <h2>Behal's ToDo List</h2>
                <input type='text' onChange={itemEvent} value={inputlist} placeholder='Mention Task'/>
                <button onClick={listofitems}> + </button>
                </div>
                <div className='task'>
                    <h2>Your Tasks</h2>
                    <ul  className='item' >
                        {items.map((itemval,index)=>{
                           return <Todo
                           key={index}
                           id={index}
                        text={itemval}
                            onSelect={deleteitem}
                            />
                        })}
                    </ul>
                </div>
            </div>
            </div>
            </>
    )
};
export default App;