import "./styles/nav.css";
import "./styles/index.css";
import "./styles/reset.css";
import "./styles/contact.css";
import "./scripts/dom";
import "./styles/responsive.css";
import "./scripts/media";
import ellipse10 from "./assets/Ellipse_10.png";

// 1st component
import photo from "./assets/photo.png";
import download from "./assets/download.png";
import codingGif from "./assets/coding1.gif";
import ellipse2 from "./assets/Ellipse_2.png";
import ellipse7 from "./assets/Ellipse_7.png";
import arrowCircleImg from "./assets/arrowCircle.png";
import arrowImg from "./assets/Vector.png";
import diamond from "./assets/diamondTexture.png";
// contact
// document.querySelector("#submitDiv").style.backgroundImage = `url(${submitImg})`;

// 1st component
document.querySelector("#myPhoto").src = photo;
document.querySelector("body").style.backgroundImage = `url(${ellipse7}), url(${ellipse7}), url(${diamond}), url(${ellipse10})`;
document.querySelector("#buttonImg").src = download;
document.querySelector("#arrow1Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow1").src = arrowImg;


// 2nd component
document.querySelector("#mobileImg").src = codingGif;
document.querySelector("#arrow2Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow2").src = arrowImg;

// 3rd component
document.querySelector("#arrow3Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow3").src = arrowImg;

// 4th component
document.querySelector("#arrow4Div").style.backgroundImage = `url(${arrowCircleImg})`;
document.querySelector("#arrow4").src = arrowImg;





