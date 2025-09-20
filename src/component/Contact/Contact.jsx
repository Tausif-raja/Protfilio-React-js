import React from "react"
import "./contact.css"

const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0717ebca-eb72-4e95-a056-5d38e1ea0dd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to contact me on message or call</p>
          <div className="contact-detials">
            <div className="contact-detial">
              <img src="src\assets\mail-icon.png" alt="mail-icon" className="mail-img"/><p>tausif_2512385@sunway.edu.np</p>
            </div>
            <div className="contact-detial">
              <img src="src\assets\call-icon.png" alt="call-icon" className="call-img" /> <p>+977 9821292610</p>
            </div>
            <div className="contact-detial">
              <img src="src\assets\location.png" alt="location-icon" className="location-img" /> <p>Kathmandu,Tinkune</p>
            </div>
          </div>
        </div>
            <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor="name">Your Name</label>
              <input type="text" placeholder="Enter your name" name="name" />
              <label htmlFor="email">Your Email</label>
              <input type="email" placeholder="Enter your email" email="eamil" /> 
              <label htmlFor="">Write your message here</label>
              <textarea name="" rows="8" placeholder="Enter your message"></textarea>
              <button type="submit" className="contact-submit">Submit now</button>
            </form>
      </div>
    </div>
  )
}

export default Contact
