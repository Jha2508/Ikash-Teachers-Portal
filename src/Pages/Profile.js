import React from 'react'
import Dashboard from '../Components/Dashboard'

function Profile() {
    return (
        <>
        <Dashboard/>
        <center>
        <h1> Profile</h1>
        <div className='row'>
            <div className='col-sm-4'>
                <img src='https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-kamala-harris-portrait.jpg' alt='..' className='rounded-circle noticeimg' />
            </div>
            <div className='col-sm-8 leftalign teacherid'>
                <h3 className="card-title ">Teacher's Name : </h3>
                <h5 className="card-title">Date of birth : </h5>

                <h5 className="card-title">Username : </h5>
                <h5 className="card-title">Password : </h5>
                <h5 className="card-title">Mobile Number : </h5>
                <h5 className="card-title">class Teacher: </h5>
            </div>
        </div>
        <table className="table periods">
            <thead>
                <tr className='table-dark'>
                    <th scope="col">PERIOD</th>
                    <th scope="col">className</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                </tr>
            </tbody>
        </table>

    </center>
    </>
    )
}

export default Profile
