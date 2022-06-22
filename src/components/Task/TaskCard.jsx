import React from 'react'
import TaskAddInput from './TaskAddInput'
import TaskCardDelete from './TaskCardDelete'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDelete />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
