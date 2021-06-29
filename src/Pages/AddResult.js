import React, { useState } from 'react'
import Dashboard from '../Components/Dashboard'
import './AddResult.css';
function AddResult() {

    const [drop, setdrop] = useState("class 1");
    return (
        <>
            <Dashboard />
            <center>
                <h1> Add result</h1>

                <form className='resultadd'>
                <div className='row'>
                <div className='col-sm'>
                <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-secondary">{drop}</button>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu">

                            <li className="dropdown-item" onClick={() => setdrop("Class 1")}>Class 1</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 2")}>Class 2</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 3")}>Class 3</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 4")}>Class 4</li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 5")}>Class 5</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 6")}>Class 6</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 7")}>Class 7</li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 8")}>Class 8</li>
                            <li className="dropdown-item" onClick={() => setdrop("Class 9")}>CLass 9</li>

                        </ul>
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='row'><div className='col-sm'> Name of the Subject </div><div className='col-sm'><input type='text' className='form-control' placeholder='enter the subject name..'/></div></div>
                        
                    </div>
               
                </div>
                    
                    
               </form>
            </center>
        </>
    )
}

export default AddResult
