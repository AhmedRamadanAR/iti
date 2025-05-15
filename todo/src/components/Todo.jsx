import { useState } from 'react';
import { Header } from './TodoHeader';
import { TodoList } from './TodoList';

export function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState(''); 
  const [completeBtn, setCompleteBtn] = useState(false);

       function onCompleteClick() {
        setCompleteBtn(!completeBtn)
    }

    const onAddClick = () => {
        if (taskText) {
           const newTask = {        
                    id: crypto.randomUUID(),

                text: taskText,
                completed: false
            };
            setTasks([...tasks,newTask])
                  setTaskText(''); 

        }

    }
const handleOnDeleteClick = (removedTaskId) => {
        const updatedTasks= tasks.filter(task=> 
            task.id !==removedTaskId
        )
        setTasks(updatedTasks)
    }

    return (
        <>
            <div className=" m-3">
                <Header onAddClick={onAddClick} taskText={taskText} setTaskText={setTaskText} />
                <TodoList handleOnDeleteClick={handleOnDeleteClick} tasks={tasks} onCompleteClick={onCompleteClick} isComplete={completeBtn}/>
            </div>
        </>
    );

}