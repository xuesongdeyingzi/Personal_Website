import React, {useState} from "react";
import { Axios, db } from '../firebase/firebaseConfig'

function Contact(){

  const [formData, setFormData] = useState({})
  const [isText, setIsText] = useState(false);

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    setIsText(true)
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-personal-c89f9.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

    return(
<div id="contact">
  <div className="container">
    <h3>Contact</h3>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="controls">

        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <div className="form-group">
              <label htmlFor="form_name">Name</label>
              <input id="form_name" type="text" name="name" onChange={updateInput} value={formData.name || ''} className="form-control" placeholder="Please enter your name" required="required" data-error="Name is required."/>
              <div className="help-block with-errors"></div>
           </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <div className="form-group">
              <label htmlFor="form_email">Email</label>
              <input id="form_email" type="email" name="email" onChange={updateInput} value={formData.email || ''} className="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required."/>
              <div className="help-block with-errors"></div>
           </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <div className="form-group">
              <label htmlFor="form_message">Message</label>
              <textarea id="form_message" name="message" onChange={updateInput} value={formData.message || ''} className="form-control" placeholder="Message for me" rows="8" required="required" data-error="Please, leave us a message."></textarea>
              <div className="help-block with-errors"></div>
            </div>
          </div>

          <div className="col-md-8 col-sm-12">
            <button type="submit" className="btn btn-lg btn-outline-primary float-right">Submit</button>
          </div>
          <div className="col-md-8 col-sm-12 text-right">{isText && "You've successfully submitted your information!"}</div>
        </div>
      </div>
    </form>
  </div>
</div>
    );
}


export default Contact;