import React, { useState } from 'react'
import Dashboard from '../Components/Dashboard'

function SeeAttendance() {
    return (
      <table className="table attendancetable">
        <thead>
          <tr className='table-dark'>
            <th scope="col">Roll No.</th>
            <th scope="col">Name</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              Absent
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              Absent
  
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>
  
              Present
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
  
  
  
  
  
  
  
  
function Attendance() {
  const [Attenda, setAttenda] = useState(false)
  const [Buttonstate, setButtonstate] = useState('See Attendance')

    return (
        <>
        <Dashboard/>
            <center>
    <h1> Attendance</h1>
    <table className="table attendancetable">
      <thead>
        <tr className='table-dark'>
          <th scope="col">Roll No.</th>
          <th scope="col">Name</th>
          <th scope="col">Attendance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Present
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Absent
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Present
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Absent
              </label>
            </div>

          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Present
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Absent
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <b>Date : </b>
    <input type="date" id="birthday" name="birthday" />
    <button className='btn btn-outline-danger' style={{ marginLeft: '30px' }} onClick={()=>{setAttenda(!Attenda);setButtonstate('Hide Attendance')}}>{Buttonstate}</button>
    {Attenda?<SeeAttendance />:null}
  </center>
  </>
        
    )
}

export default Attendance
