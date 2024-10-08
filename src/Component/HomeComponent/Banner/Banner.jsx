import React, { useState } from 'react'
import BannerImage from "../../../assets/Banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
    const [currentSlide, setCurrentSlide]=useState(1)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        appendDots: dots => (
            <div
              style={{
                position:'absolute',
                top:"50%",
                transform:"translateY(-50%)",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          beforeChange:(currentSlideNumber, nextCurrentNumber)=>{
            setCurrentSlide(nextCurrentNumber+1)
          },
          customPaging: (i) => (
            <>{i<=3 && (<div
                style={i + 1 === currentSlide?{
                  width: "30px",
                  padding:"20px 0",
                  borderRight:"3px solid green"
              }:{width: "30px",
                  padding:"20px 0",
                  borderRight:"3px solid #fff",}
          }
              >
                {i + 1 ===4?`${i+1}+`:`0${i+1}`}
              </div>) }
              
              </>
            
          ),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: 1,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
              }
            }
          ]
      };
  return (
    <div>
        <div className="container">
        <Slider {...settings}>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
      </Slider>
        </div>
       
    </div>
  )
}

export default Banner