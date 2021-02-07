import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Form = ({input, setInput, list,setList}) =>{


    const inputHandler = (e) =>{
        setInput(e.target.value)
    };



    const submitHandler = (e) =>{
        e.preventDefault();
        if(input==''){alert ("Please enter a to do!")}
        else{
            setList([...list,{task:input ,id:uuidv4(), did:false }])

        }
        setInput('')
    };



    const onKeyUp = () => {
      
      };

      

    return(

        <FormStyled onSubmit={submitHandler} className='Form'>
            <input placeholder="Type your to do" onKeyUp={(e) => onKeyUp(e)} value={input} onChange={inputHandler} type='text' ></input>
            <button ><FontAwesomeIcon icon={faPlus}/> </button>
        </FormStyled>


    )


    }

    export default Form;


    const FormStyled = styled.form`
        width:100%;
        height:80px;
        background:#FFAA1B;
        display:flex;
        justify-content:space-around;
        align-items:center;
        border-radius:25px 25px 0 0;

        input{
            height:50%;
            width:200px;
            border-radius:10px;
            border:none;
            background:#FFC95E;
            color:white;
            text-align:center;

            &::placeholder{
                color:white;
                text-align:center;
                opacity:0.7;
            }

            &:focus{
                border-bottom: 3px solid;
                border-bottom-color: #ffffff;  
            }

            @media (min-width:900px){
    width:400px;
}
         
        }

        button{
            color: #fff;
            text-transform: uppercase;
            text-decoration: none;
            background: #3fce37;
            padding: 15px;
            border-radius: 20px;
            display: inline-block;
            border: none;
            transition: all 0.4s ease 0s;
            cursor: pointer;

                &:hover {
                text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
                -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                transition: all 0.4s ease 0s;
            }
        }
    `;




