import React, { useState } from 'react'
import {BsUpload} from 'react-icons/bs'
import Dashboard from '../Components/Dashboard'
import './AddResult.css';

function Showlist(){
    return(
        <>
        <table className="table table-striped table-addresult">
        <thead>
          <tr className='table-dark'>
            <th scope="col">Roll No.</th>
            <th scope="col">Name</th>
            <th scope="col">Marks
      <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                            
<button type="button" className="btn btn-outline-warning uploadbtn" ><BsUpload/></button>

                    </div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              
            <input type='text' className='form-control tableinput' placeholder='enter Marks..'/>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
            
            <input type='text' className='form-control tableinput' placeholder='enter Marks..'/>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>
            
            <input type='text' className='form-control tableinput' placeholder='enter Marks..'/>
            </td>
          </tr>
        </tbody>
      </table>

      </>
    )
}


function AddResult() {

    const [drop, setdrop] = useState("class 1");
    const [resultAdd, setresultAdd] = useState(false)
    return (
        <>
            <Dashboard />
            <div className='marginlforresult'>
               <center><h1> Add result</h1></center> 

                <form className='resultadd'>
                <div className='row'>
                <div className='col-sm-6 flexing'>
                Class:
                <div className="input-group mb-3 classes">
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
                <div className='col-sm-6 flexing'>
                  Subject :<input type='text' className='form-control custominputresult subjectname' placeholder='enter the subject name..'/>
                    </div>
               <div className='col-sm-6 flexing'>
               Exam Name : <input type='text' className='form-control custominputresult' placeholder='enter the Exam name..'/>
                    
               </div>
               
               <div className='col-sm-6 flexing'>
               Maximum Marks : <input type='text' className='form-control custominputresult' placeholder='enter the Maximum Marks..'/>
                    
               </div>
                </div>
                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                            
<button type="button" className="btn btn-outline-danger btnaddresult" onClick={()=>setresultAdd(!resultAdd)}>Add Result</button>

                    </div>
               </form>
            </div>
            
            {resultAdd?<Showlist/>:null}
        </>
    )
}

export default AddResult