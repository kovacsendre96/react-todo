import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = ({list ,listItem, setList,}) =>{


    return(
    
    <ListWrapper className='todo__wrapper'>

       
       {list.map((listItem)=>(
        <Todo

        key={listItem.id}
        setList={setList}
        list={list}
        listItem={listItem}
       
      
        />
        
       ))}
       
        
    
    </ListWrapper>
    
    )
    
    }
    
    export default TodoList;


    const ListWrapper = styled.div`
      height:400px;
      border:2px solid #FFAA1B;
      overflow-y:scroll;
      border-radius:0 0 25px 25px;
      background:#909090;
    &::-webkit-scrollbar{
      display:none;
      
    }


    `;