import React, { useState } from "react";
import auth from "../auth";
import './login.css'

function Signin(props) {
  const [Id, setId] = useState('')
  const [Pwd, setPwd] = useState('')
  const authentication = () => {
    if (Id === 'root' && Pwd === 'toor') {
      auth.login(() => {
        props.history.push("/successful");
      });
    } else {
      alert('either Password or Email ID entered is wrong')
    }

  }
  return (
    <>
      <div className='row'>
        <div className='col-sm-6 signin'>
          <img className='signinimg' src='https://media-exp1.licdn.com/dms/image/C560BAQG2NE4QbXdycw/company-logo_200_200/0/1593850485682?e=2159024400&v=beta&t=GHGiG6lpTULD0Yi_pk9yvA8kYBPBwOZe59r_oKg_5fg'alt='..'/>
        </div>
        <div className='col-sm-4'>
        <h2 id="headerTitle">Login</h2>
            <div>
              <div className="row roge">
                <label>Username</label>
                <input type='text' placeholder='Enter Your Username' onChange={e => setId(e.target.value)} />
              </div>
              <div className="row roge">
                <label>Password</label>
                <input type='Password' placeholder='Enter your password' onChange={e => setPwd(e.target.value)} />
              </div>
              <div id="button" className="row roge">
                <button onClick={() => authentication()}>Log In</button>
              </div>
            </div>
        </div>
      </div>
    
      </>
        )
}


        export default Signin;