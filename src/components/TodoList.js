import React from 'react';
import Todo from './Todo';

const TodoList = ({list ,listItem, setList,}) =>{


    return(
    
    <div className='todo__wrapper'>

       
       {list.map((listItem)=>(
        <Todo

        key={listItem.id}
        setList={setList}
        list={list}
        listItem={listItem}
       
      
        />
        
       ))}
       
        
    
    </div>
    
    )
    
    }
    
    export default TodoList;