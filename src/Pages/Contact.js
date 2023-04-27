import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container" id='contact'>
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <h2>Got a project?</h2>
                    </div>
                    <div className="col-lg-12 mb-3">
                        <form className='row align-items-center mb-3'>
                            <div className="mb-3 col-lg-4">
                                <input type="text" className='form-control ' id='exampleInputName1' placeholder='Name' />
                            </div>
                            <div className="mb-3 col-lg-4">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                            </div>
                            <div className="mb-3 col-lg-4">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Subject' />
                            </div>
                            <div className="col-lg-12 mb-4">
                            <textarea className='form-control'  rows={7} name='message' placeholder='Message'/>
                            </div>
                            <div className="col-lg-3 col-lg-offset-9 ">

                            <button type="submit" id='submit' className="btn btn-primary form-control">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

