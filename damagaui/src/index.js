import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";

import "./build/assets/css/style.css";
import "./build/assets/css/404.css";
import "./build/assets/css/animate.css";
import "./build/assets/css/bootstrap.min.css";
import "./build/assets/css/icofont.css";
// import "./build/assets/css/lightbox.min.css";
import "./build/assets/css/magnific-popup.css";
// import "./build/assets/css/owl.carousel.css";
import "./build/assets/css/responsive.css";
import "./build/assets/css/slicknav.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Landing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
