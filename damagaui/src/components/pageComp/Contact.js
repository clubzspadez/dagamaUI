import React from "react";

export default function Contact() {
  return (
    // <!-- ================ Contact us area Start ============== -->
    <div class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <h3>Contact</h3>
            <div class="contact-form">
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
