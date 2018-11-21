import React from "react";

export default function Contact() {
  return (
    // <!-- ================ Contact us area Start ============== -->
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h3>Lets get in Contact</h3>
            <div className="contact-form">
              <form action="index.html">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="search" placeholder="Subject" />
                <textarea cols="30" rows="10" placeholder="Message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- ================ Contact us area End ============== -->
  );
}
