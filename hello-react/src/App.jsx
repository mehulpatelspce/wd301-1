import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import TaskCard from './TaskCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='justify-items-center mx-20'>
      <div className='p-2   items-start '>
        <div className='text-3xl font-bold'>Smarter Task</div>
        <b>Project:</b>Graduation Final Year Project (Revamp College Website)
      </div>
      <div className='flex'>
        <div className='text-left border-2 border-solid p-2 m-2 border-black rounded-xl float min-w-fit'>
          <div className='font-bold text-xl text-center'>Pending</div>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" />
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" />
          <div className='m-2 p-2 bg-slate-300 border-4 border-solid border-slate-100 font-bold'>+ New task</div>
        </div>


        <div className='text-left border-2 border-solid p-2  m-2 border-black rounded-xl  float min-w-fit' >
          <div className='font-bold text-xl text-center'>Done</div>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" />
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" />
        </div>


      </div>
    </div>
  );
}
export default App
