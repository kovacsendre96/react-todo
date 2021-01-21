import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, list,setList}) =>{


    const inputHandler = (e) =>{
        setInput(e.target.value)
    };



    const submitHandler = (e) =>{
        e.preventDefault();
        setList([...list,{task:input ,id:uuidv4(), did:false }])
        setInput('')
    };



    const onKeyUp = () => {
      
      };

      

    return(

        <form onSubmit={submitHandler} className='Form'>
            <input style={{width:'230px', height:'50px'}} onKeyUp={(e) => onKeyUp(e)} value={input} onChange={inputHandler} type='text' ></input>
            <button >Add</button>
        </form>


    )


    }

    export default Form;