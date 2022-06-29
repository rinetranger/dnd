import React from 'react'

const TaskCardDelete = ({taskCardsList,setTaskCardsList,taskCard}) => {
  const taskCardDelete=(id)=>{
    setTaskCardsList(taskCardsList.filter((e)=>e.id!==id));



  }
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={()=>taskCardDelete(taskCard.id)}><i className="fas fa-times"></i></button>
    </div>
  )
}

export default TaskCardDelete
