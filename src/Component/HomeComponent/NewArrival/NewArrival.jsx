import React, { useState } from 'react'
import Product from '../../CommonComponent/Product'
import Button from '../../CommonComponent/Button'
import Flex from '../../CommonComponent/Flex'
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


// SampleNextArrow//
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#979797", width:"40px", height:"40px", borderRadius:"50%", position:"absolute", left:"-20px", top:"50%", transform:"translateY(-100%)", zIndex:"2", cursor:"pointer",}}
      onClick={onClick}
    >
      <div className=' flex items-center justify-center h-full'>
        <FaLongArrowAltLeft className=' text-white'/>
      </div>
      </div>
  );
}

// SamplePrevArrow//

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#979797",width:"40px", height:"40px", borderRadius:"50%", position:"absolute", right:"-15px", top:"50%", transform:"translateY(-100%)", zIndex:"2", cursor:"pointer", }}
      onClick={onClick}
    >
       <div className=' flex items-center justify-center h-full'>
        <FaLongArrowAltRight className=' text-white'/>
      </div>
      </div>
  );
}

const settings = {
  dots:false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:true,
  prevArrow: <SampleNextArrow/>,
  nextArrow: <SamplePrevArrow />,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: 2,
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


const NewArrival = ({headdingTitle,pdata}) => {
  const [Allproduct, setAllproduct]=useState(pdata)
  return (
    <>
    <div className=' py-[128px]'>
      <div className="container">
      <h1 className=' font-bold font-DMsans text-main_font_color text-[29px] mb-12'>{headdingTitle?headdingTitle:"Title Missing"}</h1>
          <Slider {...settings}>
          {Allproduct?.map((item)=>(
         <div key={item.id}>
                <Product imga={item.img} colorVariant={item.color===true?true:false} badge={item.badge==true?<Button title={item.badgeElement==true? "New":item.discountOffer} className={"py-2 px-8 bg-black text-white"}/>:null}/>
        </div>
      ))}
          </Slider>
      </div>
    </div>
    </>
  )
}

export default NewArrival