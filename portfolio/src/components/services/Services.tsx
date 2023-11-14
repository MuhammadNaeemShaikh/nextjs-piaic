import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceItem, ServiceItemType } from '@/utils/servicesItem';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaNode } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Services = (props: {
  title: string;
  body: string;
  ServiceItem: ServiceItemType[];
  id: string;
}) => {
  return (
    <div className="text-white" id={props.id ? props.id : 'null'}>
      <p className="uppercase font-extrabold  text-center text-lg md:text-3xl tracking-widest">
        {props.title ? props.title : null}
      </p>
      <p className="uppercase font-light  text-center text-sm tracking-wide my-5">
        {props.body ? props.body : null}
      </p>
      <div className="flex items-center justify-center flex-col">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceItem.map((item: ServiceItemType) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center md:mr-10"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  {item.icon === 'GiSpiderWeb' ? (
                    <GiSpiderWeb className="text-blue-300 text-2xl" />
                  ) : item.icon === 'FaNode' ? (
                    <FaNode className="text-blue-300 text-2xl" />
                  ) : item.icon === 'CgWebsite' ? (
                    <CgWebsite className="text-blue-300 text-2xl" />
                  ) : null}
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
