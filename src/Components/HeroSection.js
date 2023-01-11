import React from "react";
import $ from "jquery";

export default function HeroSection() {
  $("#myvideo").hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
      this.removeAttribute("controls");
    } else {
      this.setAttribute("controls", "controls");
    }
  });
  return (
    <div className="hero-section">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <h1>Space Project</h1>
            <div id="player-overlay">
              <video
                id="myvideo"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
              >
                <source
                  src="..\Asserts\space.mp4"
                  type="video/mp4"
                  id="video"
                />
              </video>
            </div>

            <div id="player-overlay-mobile">
              <video
                id="myvideo"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
              >
                <source
                  src="../Asserts/header-video-mobile.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="links text-center">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              />

              <ul class="ul">
                <li>
                  <i class="fab fa-facebook-f" href="#"></i>
                </li>
                <li>
                  <i class="fab fa-twitter" href="#"></i>
                </li>
                <li>
                  <i class="fab fa-instagram" href="#"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
