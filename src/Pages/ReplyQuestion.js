import React from 'react'
import './reply.css'
import Dashboard from '../Components/Dashboard'
import {FiCamera,FiUpload} from 'react-icons/fi'
function ReplyQn() {

    return (
        <>
            <Dashboard />
            <center>
                <h1> ReplyQn</h1>
                <div className='row'>
                    <div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body" >
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div><div className='col'>
                        <div className="card singleqncard">
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className="card-img-top replyqnpic" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className='card-footer'>
                                wowow
                            </div>
                        </div>
                    </div>
                </div>
            </center>

            {/* ------------------------------------Modal------------------------------- */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Question ID: 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body qnbody">
                            <div className='row'>
                                
                            <div className='col-sm-7'>
                            <img src="https://www.vedantu.com/content-images/5bfd066ee4b0b84dc50b1e61/1.png" className='popupqnimage'  alt="..." />
                                </div>
                                
                            <div className='col-sm-5'>
                                <h2> query</h2>
                                <div className='qntext'>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</div>
                                <textarea className="tasoln" name="w3review" rows="15" cols="50" placeholder='Enter the Solution here..'/>
                                <div className='functionalities'><FiCamera className='leftalign'/><FiUpload className='uploadmodal'/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default ReplyQn