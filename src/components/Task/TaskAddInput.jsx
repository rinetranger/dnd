import React from 'react'

const TaskAddInput = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}><input  type="text" className='taskAddInput' placeholder="add a task"></input></form>
    </div>
  )
}

export default TaskAddInput
