import React, { useState } from 'react'

const Addtodo = () => {
    // list of task
    const [tasks,setTasks] = useState([]);
    // handle current task
    const [currentTask, setCurrrentTask]=useState('');

    // handle input change
    const handleInputChange = (e) => {
        setCurrrentTask(e.target.value);
    }

    // handle form submit
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if (currentTask !== '') {
            const newTask = { text: currentTask, completed: true };
            setTasks([...tasks, newTask]);
            setCurrrentTask('');
            console.log('New task added:', newTask);
        }        
    }
    
   // handle task deletion
  const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
}

    
  return (
    <div className='maindiv'>
       <h1 className='h1'>Make your Todo List.</h1>
    <div className='seconddiv'>

      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInputChange} value={currentTask} placeholder='Enter your Task' />
        <button type="submit" className='addbtn'><i class="fa-solid fa-plus"></i> Add Task</button>
      </form>
      {/* <ul>
          {tasks.map((task, index) => (
            <li className='task' key={index}> {task.text} 
                <button onClick={() => handleDeleteTask(index)} className='delbtn'><i class="fa-solid fa-trash"></i></button>
            </li>
          ))}
  
       </ul> */}
        <ul>
            {tasks.map((task, index) => (
                <React.Fragment key={index}>               {/* generate a list of task items*/}
                  <li className='task'>                    {/* sare tasks li m show honge*/}
                    {task.text} 
                  </li>
                  <button onClick={() => handleDeleteTask(index)} className='delbtn'>Remove</button>
                </React.Fragment>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Addtodo
