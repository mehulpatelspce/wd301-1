import './TaskCard.css'

const TaskCard = (props) => {
    console.log(props.dueDate);
    let message = "";
    if(props.dueDate != undefined)
        message = "Due on: " + props.dueDate;
    else if(props.completedAtDate != undefined)
        message = "Completed on: " + props.completedAtDate;

    return (
      <div className='rounded border-2 border-black border-solid m-2 p-2'>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p> {message}
        </p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }

  export default TaskCard;