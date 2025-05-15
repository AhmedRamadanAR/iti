import { useState } from "react";

export function TodoTask({ onDeleteClick, task, onCompleteClick }) {
    return (

        <>
            <div className="card">
                <div className="card-body d-flex">
                    <p className="mx-2 flex-grow-1 me-5">

                        {task.completed ? <del> {task.text}</del> :
                            task.text
                        }
                    </p>

                    <button
                        className="btn btn-danger" onClick={onDeleteClick}>

                        Delete
                    </button>
                    <button className="ms-2 btn bg-primary text-white " onClick={onCompleteClick}>
                        {task.completed ? "UnComplete" :
                            "Complete"
                        }

                    </button>

                </div>
            </div>
        </>
    );
}