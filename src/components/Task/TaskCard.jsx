import React,{useState} from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardDelete from './button/TaskCardDelete'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'
import { Draggable } from 'react-beautiful-dnd'

const TaskCard = ({taskCardsList,setTaskCardsList,taskCard,index}) => {
  const [inputText,setInputText]=useState("");
  const [taskList,setTaskList]=useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided)=>(
        <div className='taskCard' ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
      <div className='titleAndDeleteButton'>
      <TaskCardTitle /> 
      <TaskCardDelete taskCardsList={taskCardsList}
      setTaskCardsList={setTaskCardsList}
      taskCard={taskCard} />
      </div>

      <TaskAddInput inputText={inputText} setInputText={setInputText} setTaskList={setTaskList} taskList={taskList}/>
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
    </div>
      )}
    
    </Draggable>
  )
}

export default TaskCard
