
import Dashboard from '../Components/Dashboard'
import React from 'react'

function AddNotice() {
  return (<center>
    <div className='row addnotice'>
      <div className='col-sm'>
        <form className='leftalign'>
          <label htmlFor='titlenotice'><b>Title of the notice : </b>&nbsp;</label>
          <input id='titlenotice' type='text' placeholder='Enter title here' /><br />
          <textarea rows='10' cols='30' placeholder='Enter The Notice matter here' className='tanotice' />
          <button className='btn btn-outline-danger m-4'>Post</button>
        </form>
      </div>
    </div>
  </center>)
}

function NoticeBoard() {
  return (

    <>
    <Dashboard/>
      <center>

        <h1> Notice Board</h1>
        <button className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Add a new notice</button>
        <div className="card w-75 singlenotice">
          <div className="card-body">
            <div className='row'>
              <div className='col-sm-4'>
                <img src='https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-kamala-harris-portrait.jpg' alt='..' className='rounded-circle noticeimg' /><br/>
                
                <h3 className="card-title">Akash Pandey</h3>
              </div>
              <div className='col-sm-8'>
              <div className='datetimepc'>12 June, 2021</div>
                <h5 className="card-title">Regarding maths olympiad for class 5</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
              </div>
            </div>
          </div>
          <div className='card-footer datetimemobile'>
            <div className='row'>
              <div className='col leftalign'>
                12 June,2021
              </div>
              <div className='col rightalign'>
                04: 40AM
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------MODALS------------------------------------------- */}

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Notice Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <AddNotice/>
                </div>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default NoticeBoard

