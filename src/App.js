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
import AddResult from './Pages/AddResult'
import ReplyQn from './Pages/ReplyQuestion'




function App() {
  return (
    <div className='apprendered'>
      <Router>
      <div className='marginl'>
      <Switch>
            <Route path='/' exact component={Signin}/>
        
          
            <ProtectedRoute path='/successful' exact component={NoticeBoard} />
            <ProtectedRoute path='/successful/attendance' exact component={Attendance} />
            <ProtectedRoute path='/successful/Profile' exact component={Profile} />
            <ProtectedRoute path='/successful/ReplyQn' exact component={ReplyQn} />
            <ProtectedRoute path='/successful/TeacherGroup' exact component={TeacherGroup}/>
            <ProtectedRoute path='/successful/addresult' exact component={AddResult}/>
            
          </Switch>
          </div>
        
      </Router>
    </div>
  );
}

export default App;
