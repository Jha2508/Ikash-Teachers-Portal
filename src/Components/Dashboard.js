import {Link } from 'react-router-dom'
import React from 'react';
function Dashboard(props) {
    return (
      <div>
        <header className="navbar navbar-dark bg-dark sticky-top flex-md-nowrap p-0 shadow">
          <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"><img src='https://yt3.ggpht.com/ytc/AAUvwniXzp9mvml54TonRZBo7ftR8mCnvJnbaci91OLWmw=s900-c-k-c0x00ffffff-no-rj' alt="" width={30} height={30} />
            IKash</div>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse" style={{ textAlign: 'center' }}>
              <div className="pt-3">
                <div className='teacherdet'>
                  <img src='https://cdn3.whatculture.com/images/2015/11/3USx0Rvi-600x338.jpg' width='200px' className='ounded' height='200px' alt='...' /><br />Barry Allen</div>
                  
                <div className='schoolname'>Alpha Beta Gama THeta Brand New High School</div>
                <ul className="nav flex-column menus">
                  <li className="nav-item">
                    <Link className="nav-link" to="/successful">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/AddDiary' className="nav-link">
                      Add Diary
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/attendance' className="nav-link">
                      Attendance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/addresult' className="nav-link">
                      Add Result
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/profile' className="nav-link">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/TeacherGroup' className="nav-link">
                      Teacher group
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/successful/ReplyQn' className="nav-link">
                      Reply Questions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/' className="nav-link">
                      Logout
                    </Link>
                  </li>
                </ul>
                <div className='sidebar-footer'>By IKash Education</div>
                
              </div>
            </nav>
  
          </div>
        </div>
      </div>
  
    )
  }

  export default Dashboard;