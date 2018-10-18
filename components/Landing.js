import NavBar from './pageComp/NavBar'
import Header from './pageComp/Header'
class Landing extends React.Components {
  constructor(){
    super();
  }
  render(){
    return(
      <NavBar />
      <Header />
      <Hero />
      <Action />
      <Services />
    )
  }

}
// <!-- ============== Offcanvas Menu Area ============= -->
<div class="offcanvas-menu">
<span class="offcanvasmenu-close"><i class="icofont icofont-close-line"></i></span>
<div class="logo">
    <h1><a href="landing-mobile-app.html">Dagama<span>App</span></a></h1>
</div>
<ul>
<li><a href="landing-mobile-app.html">Home</a></li>
<li><a href="cart-overview.html">Overview</a></li>
<li><a href="main-shop.html">Feature</a></li>
<li><a href="pricing-v1.html">Pricing</a></li>
<li><a href="how-it-work.html">Works</a></li>
<li><a href="faq-v1.html">FAQ</a></li>
<li><a href="contact-us.html">Contact</a></li>
</ul>
</div>



<!-- ================ Smart Choice Area Start ============== -->
<div class="smart-choice mobile-apps">
<div class="container">
<div class="row">
<div class="col-lg-6 wow slideInLeft" data-wow-duration="3s" data-wow-delay=".2s">
<img src="assets/img/elevator.jpg" alt="">
</div>
<div class="col-lg-6">
  <h4><span>The Smartest</span> Choice <br> for intelligent <span>developers</span></h4>
<ul>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit aute irure dolor in reprehenderit in volup  anim id est laboru.</li>
  <li>Tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Minim veniam quis nostrud exercitation.</li>
  <li>Commodo consequat. I'm aute irure dolor in reprehenderit in volup</li>
  
</ul>
<a href="#" class="boxed-btn">Download</a>
<a href="#" class="borderd-btn">Learn more</a>
</div>
</div>
</div>
</div>
<!-- ================ Smart Choice Area End ============== -->

<!-- ================ Sponcer Area Start ============== -->
<div class="sponser-area">
<div class="container">
<div class="row">
        <div class="col-lg-8 offset-lg-2 text-center wow fadeInDown" data-wow-duration="3s">
            <div class="section-title">
                <h3>App Screenshort</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever when an unknown pecimen book.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="sponcer-testmonial">
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-1.png" alt="">
                </div>
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-2.png" alt="">
                </div>
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-3.png" alt="">
                </div>
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-4.png" alt="">
                </div>
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-1.png" alt="">
                </div>
                <div class="sponcer-single-testmonial">
                    <img src="assets/img/spsoser-2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- ================ Sponcer Area End ============== -->
<!-- ================ Testmoanial Area Start ============== -->

<!-- ================ Testmoanial Area End ============== -->
<!-- ================ Conrtact us area Start ============== -->
<div class="contact-area">
<div class="container">
<div class="row">
  <div class="col-lg-8 offset-lg-2 text-center">
    <h3>Contact</h3>
    <div class="contact-form">
      <form action="index.html">
        <input type="text" placeholder="Full Name">
        <input type="email" placeholder="Email">
        <input type="search" placeholder="Subject">
        <textarea  cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="Send">
      </form>
    </div>
  </div>
</div>
</div>
</div>
<!-- ================ Conrtact us area End ============== -->
<!-- ================ FAQ area Start ============== -->
<div class="faq-area mobile-apps">
<div class="container">
<div class="row">
        <div class="col-lg-8 offset-lg-2 text-center wow fadeInDown" data-wow-duration="3s">
            <div class="section-title">
                <h3>Frequently asked questions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et  consectetur adipisicing eiusmod dolore magna aliqua. </p>
            </div>
        </div>
    </div>
<div class="row">
<div class="col-lg-7">
<div class="tab-btn">
  <ul class="nav nav-tabs">
    <li class="nav-item"><a href="#tab1" aria-controls="tab1" data-toggle="tab" class="nav-link">What is Myapp ?</a>
    </li>
    <li class="nav-item"><a href="#tab2" aria-controls="tab2" data-toggle="tab" class="active nav-link">Myapp for communication or Business ? </a>
    </li>
    <li class="nav-item"><a href="#tab3" aria-controls="tab3" data-toggle="tab" class="nav-link">What are my payment options - credit card and/or invoicing?</a>
    </li>
    <li class="nav-item"><a href="#tab4" aria-controls="tab4" data-toggle="tab" class="nav-link">My team has credits. How do we use them?</a>
    </li>
    <li class="nav-item"><a href="#tab5" aria-controls="tab5" data-toggle="tab" class="nav-link">We need to add new users to our team. How will that be billed?</a>
    </li>
    <li class="nav-item"><a href="#tab6" aria-controls="tab6" data-toggle="tab" class="nav-link">My team wants to cancel its subscription. How do we do that?</a>
    </li>
  </ul>
</div>
</div>
<div class="col-lg-5">
<div class="tab-list">
  <div class="tab-content">
    <div class="tab-pane" id="tab1">
      <p>1Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
    <div class="tab-pane  active" id="tab2">
      <p>2Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
    <div class="tab-pane" id="tab3">
      <p>3Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
    <div class="tab-pane" id="tab4">
      <p>4Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
    <div class="tab-pane" id="tab5">
      <p>5Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
    <div class="tab-pane" id="tab6">
      <p>6Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br>It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
        <br>It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem</p>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
<!-- ================ FAQ area End ============== -->
<!-- ================ Footer area Start ============== -->
<footer class="site-footer theme-2">
<div class="container ptb-60">
<div class="row">
<div class="col-lg-4 col-sm-6">
<div class="widget">
  <h4 class="widget-title">About</h4>
  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
<div class="col-lg-2 col-sm-6">
<div class="widget">
  <h4 class="widget-title">Policy</h4>
  <ul>
    <li><a href="#">Terms</a></li>
    <li><a href="#">Licenses</a></li>
    <li><a href="#">Refunds</a></li>
    <li><a href="#">Security</a></li>
  </ul>
</div>
</div>
<div class="col-lg-2 col-sm-6">
<div class="widget">
  <h4 class="widget-title">Help</h4>
  <ul>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Refunds</a></li>
    <li><a href="#">Affiliate</a></li>
  </ul>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="widget">
  <h4 class="widget-title">Subscribe Newsletter</h4>
  <form action="#">
    <input type="text" placeholder="Your email address"/>
    <button class="boxed-btn">Subscribe</button>
  </form>
</div>
</div>
</div>
</div>
<div class="main-footer">
<div class="container">
<div class="row">
<div class="col-lg-10 offset-lg-1">
  <div class="copywright">
    <div class="row">
      <div class="col-md-6">
        <p>Copyright 2017 - All Right Reserved</p>
      </div>
      <div class="col-md-6 text-right">
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Term</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</footer>