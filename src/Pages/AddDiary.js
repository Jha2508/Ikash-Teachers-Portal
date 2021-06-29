import React,{ useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import { Tabs,Tab,TabPanel,TabList } from 'react-tabs'
import Dashboard from '../Components/Dashboard';

function AddHomework() {

    const [drop, setdrop] = useState("class 1");
    return (<center>
      <h1> Add Homework</h1>
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
  
      <textarea rows='10' cols='30' placeholder='Enter The Homework Here' className='tanotice' />
      <button className='btn btn-outline-danger m-2'>Post</button>
  
    </center>)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function AddRemarks() {
  
    const [drop, setdrop] = useState("class 1");
    return (<center>
      <h1> Add Remarks</h1>
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
      <b>Roll Number : </b><input type='text' placeholder='Enter Roll Number Here' /><br />
      <textarea rows='10' cols='30' placeholder='Enter The Remark Here' className='tanotice' />
      <button className='btn btn-outline-danger m-2'>Post</button>
  
    </center>)
  }

  
  
  
function AddDiary() {
    return (
        <div>
  <Dashboard/>


            <Tabs>
                <TabList >
                    <Tab>Add Homework</Tab>
                    <Tab >Add Remark</Tab>
                </TabList>

                <TabPanel>

                    <AddHomework />
                </TabPanel>
                <TabPanel>

                    <AddRemarks />

                </TabPanel>
            </Tabs>



        </div>
    )
}

export default AddDiary
