import React, {useState} from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import styled from 'styled-components';


function App (){

const [input,setInput]=useState('');
const [list,setList]=useState([]);




    return(
        
    <MainContainer className='App'>
        <Form
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
         />

        <TodoList 
        list={list} 
        setList={setList}
        
        />

    </MainContainer>

    )

}

export default App;


const MainContainer = styled.div`

margin: 0 auto 0 auto;

@media (min-width:900px){
    width:80%;
}
@media (min-width:1200px){
    width:70%;
}
`;