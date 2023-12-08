
import './HeaderStyle.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Header = () => {


    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-lime-900 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/rGmrjr7/sean-pollock-Ph-Yq704ffd-A-unsplash.jpg")' }}>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="max-w-5xl">
                                <h1 className="md:text-5xl text-3xl text-center font-bold text-white">Your <span className='text-lime-500'>Premier Destination</span>  for Real Estate</h1>
                                <p className="my-4 max-w-lg mx-auto text-center md:text-lg md:font-bold font-semibold text-white">Discover a world of opportunities with our QuantumEstates platform. Explore a wide range of properties in prime locations. Your perfect home awaits.</p>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-lime-900 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/mDpHz6v/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg")' }}>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="max-w-5xl">
                                <h1 className="md:text-5xl text-3xl text-center font-bold text-white">Find Your <span className='text-lime-500'>Dream Home</span> with Us</h1>
                                <p className="my-4 max-w-lg mx-auto text-center md:text-lg md:font-bold font-semibold text-white">Buy your dream home property with confidence. We're here to guide you every step of the way.</p>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-r from-lime-900 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/LkbhwrY/robert-bock-c-V4qkkor-DFY-unsplash.jpg")' }}>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="max-w-5xl">
                                <h1 className="md:text-5xl text-3xl text-center font-bold text-white">Sell Your <span className='text-lime-500'>Property with</span>  Confidence</h1>
                                <p className="my-4 max-w-lg mx-auto text-center md:text-lg md:font-bold font-semibold text-white">List your property with us and reach a wide audience. Our experienced team is here to help you throughout the selling process.</p>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </>

    );
};

export default Header;