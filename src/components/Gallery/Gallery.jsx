import React from 'react';
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import img1 from '../../assets/images/demo.jpg'

// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "../../assets/css/Gallery.css";

import img2 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5821.jpg';
import img4 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5834.jpg';
import img5 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5870.jpg';
import img6 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5828.jpg';
import img7 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5873.jpg';
import img8 from '../../assets/images/Gallery/Fresher_s2K22/_MAK5940.jpg';


import img3 from '../../assets/images/Gallery/Farewell_22/IMG_4868.jpg';
import img9 from '../../assets/images/Gallery/Farewell_22/IMG_5743.jpg';
import img10 from '../../assets/images/Gallery/Farewell_22/IMG20220507131707_01.jpg';



function Gallery() {
 
  return (
    <div className='gallary-container'>

      <div className="home_content">

        <div className="home_heading-1">Welcome To</div>
        <div className="home_heading-2" align="centre">Art Gallery of EMR Club</div>
        </div>
         <div className="dd">
       <h1 className="ss">Freshers 2K22</h1>
        <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={true}
        pagination={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: -19,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
      
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img2} />
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src={img4} />
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img5} />
      
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img6} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img7} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img8} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
      </Swiper>
      </div> 
      <div className="p1">
      <h1 className="ss">Farewell 2K22</h1>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={true}
        pagination={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
      
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img3} />
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img9} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img10} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="p2">
      <h1 className="ss">Workshops</h1>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={true}
        pagination={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
       
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img1} />
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="p3">
      <h1 className="ss">Freshers</h1>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={true}
        pagination={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        
        
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img1} />
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="p4">
      <h1 className="ss">xyz</h1>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img1} />
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
      
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img src={img1} />
        
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Gallery
