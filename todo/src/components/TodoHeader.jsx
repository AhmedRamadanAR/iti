import { useState } from "react";

export function Header({onAddClick,taskText,setTaskText}) {
//state- component level
//if to child - props data information
//state mutable 
//props imutable
    return (
        <>
            <div className="container-fluid   bg-primary  p-5">
                <div className="col-12">
                    <div className="row justify-content-end align-items-end ">

                        <h1 className="display-2 text-white fw-bold " dir="rtl"> !To-Do App </h1>
                        <br />
                        <p className=" fs-4 text-white p-5" dir="rtl"> Add New To-Do </p>
                        <br />

                    </div>

                    <div className="row ms-5">
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                            </div>
                            <input value= {taskText} onChange={(e)=>{setTaskText(e.target.value)}} type="text" className="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Enter Your Task" />
                        </div>

                    </div>
                    <div className="row ">
                        <div className="d-flex justify-content-end align-items-end">
                            <button onClick={onAddClick} type="button" className="btn btn-outline-light " style={{ width: '100px' }}>Add</button>

                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}