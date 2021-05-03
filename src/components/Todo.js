import React from 'react';
import '../style/style.css'
import {faCheckCircle,faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Todo = ({ list, setList,listItem}) => {


    const done = () => {

        setList(
            list.map((m)=>{
                if(m.id === listItem.id){
                    return{
                        ...m, did: !m.did
                    }
                }
                return m                    
            })


        ) 
        
  
        
        
        
    }

    const remove = () => {

        setList(list.filter((f) => f.id !== listItem.id))
       
    }



    return (


        <TodoItem className='todo-item'>
                <p contenteditable="true"  className={listItem.did ? 'done' : null}>{listItem.task}</p>
                <div>
                    <button onClick={done}><FontAwesomeIcon icon={faCheckCircle} /></button>
                    <button onClick={remove} ><FontAwesomeIcon icon={faTrash} /></button>
                </div>
        </TodoItem>

    )

}

export default Todo;


const TodoItem = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:#5C5C5C;
    color:white;
    border:1px solid white;
    transition:0.4s;

    &:hover{
        background:#909090;
        button{
           
        background:#909090;
    }
        
    }
    p{
        width:50%;
        text-align:center;
        cursor:pointer
    }
    div{
        width:50%;
            text-align:center;
        button{
            color:#FFAA1B;
            background:#5C5C5C;
            border:none;
            font-size:1.5rem;
            transition:0.4s;
            outline:none;
            cursor:pointer;
         
        }
    }

`;