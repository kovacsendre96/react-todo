import React, {useState} from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';



function App (){

const [input,setInput]=useState('');
const [list,setList]=useState([]);




    return(
        
    <div className='App'>
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

    </div>

    )

}

export default App;