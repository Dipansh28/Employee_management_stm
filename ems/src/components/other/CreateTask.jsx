import React, {useContext, useState} from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = ({data}) => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [Category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    
    setNewTask({taskTitle,setTaskDate,Category,asignTo,taskDescription,active:false,NewTask:true,failed:false,completed:false})
    
    const data = userData

     data.forEach(function(elem){
      if(asignTo == elem.firstName){
       elem.tasks.push(newTask)
       elem.taskCounts.newTask = elem.taskCounts.newTask+1
      }
     })
     setUserData(data)
     console.log(data)

     setTaskTitle('')
     setTaskDate('')
     setAsignTo('')
     setCategory('')
     setTaskDescription('')
  }

  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={(e) =>{
          submitHandler(e)
        }} 
        className='flex flex-wrap w-full items-start justify-between'
        >
        <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Create a UI design'
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input 
              value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee Name'
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input 
              value={Category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Design, Dev, etc'
              />
            </div>
        </div>
            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
            <textarea 
             value={taskDescription}
             onChange={(e)=>{
              setTaskDescription(e.target.value)
             }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id='' cols='30' rows='10'
            >
            </textarea>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-5 rounded-lg text-sm mt-4 w-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-transform duration-300">
  Create Task
</button>

            </div>
        </form>
     </div>
    </div>
  )
}

export default CreateTask
