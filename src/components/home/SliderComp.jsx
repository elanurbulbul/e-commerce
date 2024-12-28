import React from 'react'
import Slider from 'react-slick';
const SliderComp = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
         <Slider {...settings}>
    <div  className='!flex items-center bg-gray-100 px-6'>
      <div> 
        <div className='text-5xl font-bold'>En Kaliteli Ayakkabılar</div>
        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur quia enim at, blanditiis vel quae, veritatis quisquam in debitis et ipsum, ab tenetur quo amet saepe. Id distinctio eligendi non nam fugiat quis, magnam dolorem ipsam quaerat libero repellat pariatur eius quisquam nobis facere voluptatibus incidunt. Ratione, in quo?</div>
        <div className='border rounded-full text-3xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-500 '>İncele</div>
      </div>
      <img className='w-[500px] h-[500px]  ' src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png" alt="img" />
    </div>
    <div  className='!flex items-center bg-gray-100 px-6'>
      <div> 
        <div className='text-5xl font-bold'>En Kaliteli Ayakkabılar</div>
        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur quia enim at, blanditiis vel quae, veritatis quisquam in debitis et ipsum, ab tenetur quo amet saepe. Id distinctio eligendi non nam fugiat quis, magnam dolorem ipsam quaerat libero repellat pariatur eius quisquam nobis facere voluptatibus incidunt. Ratione, in quo?</div>
        <div className='border rounded-full text-3xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-500 '>İncele</div>
      </div>
    <img className='w-[500px] h-[500px]' src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ca929f7e-f433-46b7-8d83-1a6171c172ce/NIKE+REVOLUTION+7+EASYON.png" alt="img" />
    </div>
   
  </Slider>
    </div>
   
  )
}
export default SliderComp
