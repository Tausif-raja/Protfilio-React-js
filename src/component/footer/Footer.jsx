import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="src\assets\T (2).png" alt="" className='foot-img'/>
                <p>I am Frontend developer from, Nepal</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="src\assets\user-icon.png" alt="" className='icon' />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2023 Tausif Raja. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

        </div>
    </div>
  )
}

export default Footer
