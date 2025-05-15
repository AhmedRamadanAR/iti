import { TodoTask } from "./TodoTask";

export function TodoList({handleOnDeleteClick,tasks,onCompleteClick}){
console.log()
    return(
        <>
        <div className="container-fluid  justify-content-center">
           <h2 className="display-3 text-muted p-4 text-center">Let's get some work done!</h2>



        </div>
             <div className="container-fluid  justify-content-start">
           {
           tasks.map((task)=>(
            <TodoTask key={task.id} 
            onDeleteClick={()=>handleOnDeleteClick(task.id)} 
            task={task}
            onCompleteClick={()=>onCompleteClick(task.id)}
            />

           ))
        }
        


        </div>
        </>
    );
}