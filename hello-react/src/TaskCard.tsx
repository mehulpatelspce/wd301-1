import React from 'react';
import './TaskCard.css'

interface ITaskCard{
  title: string,
  dueDate: string,
  completedAtDate : string,
  assigneeName: string
}

class CTaskCard implements ITaskCard{
  title: string;
  dueDate: string;
  completedAtDate : string;
  assigneeName: string;

  constructor(title: string, dueDate: string, completedAtDate: string, assigneeName: string){
    this.title = title;
    this.dueDate = dueDate;
    this.completedAtDate = completedAtDate;
    this.assigneeName = assigneeName;
  }

  display(){
    let message = "";
    if(this.dueDate != undefined)
        message = "Due on: " + this.dueDate;
    else if(this.completedAtDate != undefined)
        message = "Completed on: " + this.completedAtDate;

    return (
      <div className='rounded border-2 border-black border-solid m-2 p-2'>
        <h2 className='text-xl font-bold'>{this.title}</h2>
        <p> {message}</p>
        <p>Assignee: {this.assigneeName}</p>
      </div>
    );
  }
}


const TaskCard = (props) => {
  const tempTaskCard = new CTaskCard(props.title, props.dueDate, props.completedAtDate, props.assigneeName);
  return tempTaskCard.display();
  }

  export default TaskCard;