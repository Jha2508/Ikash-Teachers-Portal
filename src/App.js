import './App.css'
import './sidebars.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NoticeBoard from './Pages/NoticeBoard'
import Attendance from './Pages/Attendance'
import Profile from './Pages/Profile'
import Signin from './Pages/SignIn'
import { ProtectedRoute } from './protectedroute'
import AddDiary from './Pages/AddDiary'
import TeacherGroup from './Pages/TeacherGroup'
import Dashboard from './Components/Dashboard'
import AddResult from './Pages/AddResult'

function ReplyQn() {

  return (
    <>
    <Dashboard/>
  <center>
    <h1> ReplyQn</h1>
  </center>
  </>)
}



function App() {
  return (
    <div className='apprendered'>
      <Router>
      <Switch>
            <Route path='/' exact component={Signin}/>
        <div className='marginl'>
          
            <ProtectedRoute path='/successful' exact component={NoticeBoard} />
            <ProtectedRoute path='/successful/attendance' exact component={Attendance} />
            <ProtectedRoute path='/successful/Profile' exact component={Profile} />
            <ProtectedRoute path='/successful/ReplyQn' exact component={ReplyQn} />
            <ProtectedRoute path='/successful/AddDiary' exact component={AddDiary}/>
            <ProtectedRoute path='/successful/TeacherGroup' exact component={TeacherGroup}/>
            
            <ProtectedRoute path='/successful/addresult' exact component={AddResult}/>
            </div>
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
