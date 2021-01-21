import React from 'react';
import '../style/style.css'

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


        <div className='todo-item'>

            <div style={{display:'flex'}}>
                <p contenteditable="true"  className={listItem.did ? 'done' : null}>{listItem.task}</p>
                <button onClick={done}>Done</button>
                <button onClick={remove} >Delete</button>
            </div>

                

        </div>

    )

}

export default Todo;
