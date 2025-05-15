import { useState } from "react";

export function TodoTask({ onDeleteClick, Task,onCompleteClick,isComplete }) {
 console.log(Task.text)
    return (

        <>
            <div className="card">
                <div className="card-body d-flex">
                    <p className="mx-2 flex-grow-1 me-5">

                        {isComplete ? <del> {Task.text}</del> :
                            Task.text 
                        }
                    </p>

                    <button
                        className="btn btn-danger" onClick={onDeleteClick}>

                        Delete
                    </button>
                    <button className="ms-2 btn bg-primary text-white " onClick={onCompleteClick}>
                            {isComplete ? "Uncomplete" :
                            "Complete"
                        }
                        
                    </button>

                </div>
            </div>
        </>
    );
}