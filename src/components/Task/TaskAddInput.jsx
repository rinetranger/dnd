import React from 'react'
import { v4 as uuid } from 'uuid';


const TaskAddInput = ({inputText,setInputText,taskList,setTaskList}) => {

  const handleSubmit=(e)=>{
    const taskId= uuid();
    e.preventDefault();
    //カードを追加する。
    if(inputText===""){
      return
    };
    setTaskList([
      ...taskList,
      {text:inputText,
      id:taskId,
      draggableId:`task-${taskId}`,
    },
    ]);
    setInputText("");
   

    

  }

  const handleChange=(e)=>{
    setInputText(e.target.value);
   
    

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" 
        className='taskAddInput' 
        placeholder="add a task" 
        onChange={handleChange}
        value={inputText}
        >
          </input></form>
    </div>
  )
}

export default TaskAddInput
