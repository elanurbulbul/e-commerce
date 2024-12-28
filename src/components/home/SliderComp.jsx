import React from 'react'
import Slider from 'react-slick';
const SliderComp = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
         <Slider {...settings}>
    <div>
      <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png" alt="img" />
    </div>
    <div>
    <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ca929f7e-f433-46b7-8d83-1a6171c172ce/NIKE+REVOLUTION+7+EASYON.png" alt="img" />
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
    </div>
   
  )
}
export default SliderComp
