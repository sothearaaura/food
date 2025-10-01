import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slidebar() {
  return (
    <>
      <div className="hidden lg:block w-full h-[650px] py-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full w-full"
        >
          <SwiperSlide>
            <img className="h-[550px] w-full object-cover" src="https://www.parliament.uk/globalassets/assets/subjects/agriculture-animals-food-rural-affairs/standard/adobestock_234241545.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[550px] w-full object-cover" src="https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[550px] w-full object-cover" src="https://img.freepik.com/premium-photo/chocolate-cake-with-raspberries-raspberries-top_1150107-1693.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[550px] w-full object-cover" src="https://www.just-drinks.com/wp-content/uploads/sites/29/2021/12/Soft-Drinks-e1640100599572.jpg" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="block lg:hidden w-full">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img className="h-[250px] w-full object-fill  shadow-md bg-white" src="https://www.parliament.uk/globalassets/assets/subjects/agriculture-animals-food-rural-affairs/standard/adobestock_234241545.jpg"alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full object-fill shadow-md bg-white" src="https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full object-fill shadow-md bg-white" src="https://img.freepik.com/premium-photo/chocolate-cake-with-raspberries-raspberries-top_1150107-1693.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full object-fill shadow-md bg-white" src="https://www.just-drinks.com/wp-content/uploads/sites/29/2021/12/Soft-Drinks-e1640100599572.jpg" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
