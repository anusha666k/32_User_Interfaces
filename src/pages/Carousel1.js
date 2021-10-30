import React from "react";


function Carousel1() {
  return (
 <span>
      <h3>Carousel</h3>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCe4okOnexi9VSTkmvM3dEhEg0Bm1s9_cPrA&usqp=CAU"
              alt="Los Angeles"
              width="250"
              height="250"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0GgxpePcXffjgjKfV2W4I7bhnc6IsV_F6A&usqp=CAU"
              alt="Chicago"
              width="250"
              height="250"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2li0S46ZgYwsmks9bIDPSP4isQ5Y1WCCSRg&usqp=CAU"
              alt="New York"
              width="250"
              height="250"
            />
          </div>
          <div class="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfy-dV84x9nizYHdsY_oHO8yNQQmu2oNavg&usqp=CAU"
            alt="New York"
            width="250"
            height="250"
          />
        </div>
        <div class="carousel-item">
        <img
          src="data:image/jpeg;base64,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"
          alt="New York"
          width="250"
          height="250"
        />
      </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
  </span>
  );
}

export default Carousel1;
