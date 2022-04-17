import React from "react";
import Slider from "react-slick/lib/slider";
import "./course.css";
const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <div className="course-wrapper">
        <Slider {...settings}>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide-container">
              <div class="card">
                <div className="img-container"></div>
                <div class="card-body card-body-cont">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Courses;
