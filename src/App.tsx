import conv1 from './assets/conv1.webp'
import conv2 from './assets/conv2.webp'
import truck from './assets/truck.webp'
import cat from './assets/cat-image.webp'
import bird from './assets/bird-image.webp'
import dog from './assets/dog-image.webp'
import dogHorizontal from './assets/dog-image-horizontal.webp'
import 'swiper/swiper.min.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Jest bug z swiperem dlatego uzywam tu ts-ignore

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle'
import {useState} from "react";
export function App() {
    const [imageModalSrc, setImageModalSrc] = useState<string>('');
    const handleImageClick = (src:string) => {
        setImageModalSrc(src);
        setIsModalOpen(true);
    };
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    if(isModalOpen){
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '15px'
    }else{
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'
    }
    const closeModal = () => {
        setImageModalSrc('');
        setIsModalOpen(false);
    };
    return (
    <>
        <nav className='flex items-center h-24 px-6 justify-between shadow translate-y-2 shadow-md shadow-opacity-20 '>
            <div className='w-[88%] mx-auto flex items-center justify-between'>
            <h2 className='font-bold text-[46px]  '>LOGO</h2>

                <ul className='hidden lg:flex  gap-8 text-[24px]  '>
                    <li><a className='opacity-[0.72]' href="#">Startseite</a></li>
                    <li><a className='underline' href="#">Uber uns</a></li>
                    <li><a className='opacity-[0.72]' href="#">Kontakt</a></li>
                </ul>
            </div>
            <div className='flex   flex-col items-start p-0 gap-[10px] w-10 lg:hidden '>
                <div className='w-full  border-2 border-[#204497]'></div>
                <div className='w-[75%] border-2 border-[#089ce2]'></div>
                <div className='w-full  border-2 border-[#204497]'></div>
            </div>

        </nav>

        <main className='pt-10'>
        <div className='w-[95%] ml-auto'>
            <div className='flex gap-3 items-center'><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_878_22256)">
                    <path d="M5 12H3L12 3L21 12H19" stroke="#667085" stroke-width="1.66667" stroke-linecap="square"/>
                    <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="#667085" stroke-width="1.66667" stroke-linecap="square"/>
                    <path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21" stroke="#667085" stroke-width="1.66667" stroke-linecap="square"/>
                </g>
                <defs>
                    <clipPath id="clip0_878_22256">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <p className='text-gray-500 font-[500]'>Startseite</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_878_22263)">
                        <path d="M6 4L10 8L6 12" stroke="#667085" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_878_22263">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            <p className='text-[#204497] font-bold   '>Uber Uns</p>
            </div>
            <div className='flex items-end mt-10 '>
                {/*<svg width={"35"} height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M0 0H19.6867V15.8471H0V0ZM27.2754 18.1529H34V34H27.2754V18.1529Z" fill="#DCDDDE"/>*/}
                {/*    <path d="M27.7719 0H34.6188V15.8471H27.7719V0ZM0 18.1529H20.045V34H0V18.1529Z" fill="#204497"/>*/}
                {/*    <path d="M22.375 0H25.4462V15.8471H22.375V0ZM22.375 18.1529H25.4462V34H22.375V18.1529Z" fill="#84D5F7"/>*/}
                {/*</svg>*/}
                <div className='w-[5%] lg:w-[7%] h-[34px] lg:h-[80px] flex gap-1.5 justify-between'>
                    <div className='w-1/2 flex flex-col gap-1.5'>
                        <div className='bg-[#DCDDDE] h-1/2 '></div>
                        <div className='bg-[#204497] h-1/2'></div>
                    </div>
                    <div className='w-1/12 flex flex-col gap-1.5'>
                        <div className='bg-[#089CE2] h-1/2'></div>
                        <div className='bg-[#089CE2] h-1/2'></div>
                    </div>
                    <div className='w-1/4 flex flex-col gap-1.5'>
                        <div className='bg-[#204497] h-1/2'></div>
                        <div className='bg-[#DCDDDE] h-1/2'></div>
                    </div>
                </div>
                <div className=' lg:bg-[url("./assets/bg-header.png")] w-full lg:relative bg-center bg-cover lg:z-[20] '>
                    <h2 className=' font-bold text-white m-0 p-0 lg:absolute lg:z-40 text-white lg:text-5xl lg:left-1/2 lg:top-1/2 lg:translate-y-[-50%] lg:translate-x-[-50%] '>Uber Uns</h2>

                <div className='  bg-[#204497] h-[34px] w-full flex lg:opacity-70   items-center justify-center text-2xl p-0  lg:h-20   ' >
                    <h2 className='text-white lg:hidden font-bold text-[22px]'>Uber uns</h2>

                </div>
                </div>
            </div>
        </div>
            <div className='flex flex-col lg:flex-row lg:gap-10'>
            <div className='w-[95%] lg:w-[50%] ml-auto '>


            <div className='w-[95%]  text-[#546E7A] lg:w-[85%] lg:text-justify'>
                <p className='mt-6 font-bold  leading-[27px] text-[18px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis minus neque nulla pariatur. Amet animi corporis dicta dolore hic iste iure magni nesciunt, porro temporibus. Consequatur debitis ea fugit?</p>
                <p className=' mt-10 font-[400] leading-[24px] text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis deserunt dolorum enim minima numquam optio, recusandae soluta vero voluptatem!
                </p>
                <p className='mt-10 font-[400] leading-[24px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, culpa, deserunt dignissimos, ducimus earum ex harum libero maxime necessitatibus quia ratione vero voluptatem? Accusamus alias aliquam amet animi blanditiis cum dicta, dignissimos doloremque et excepturi exercitationem fugit illum in itaque iusto, laudantium modi necessitatibus nisi numquam, placeat provident quidem quos sed sequi soluta sunt suscipit.</p>

            </div>
            </div>
            <div className='relative mt-16 mb-72 lg:order-[-1] lg:w-1/2'>
                <img loading="lazy"className='w-full lg:w-[90%]'  src={conv1} alt="Image showing a group of people siting using laptops on a desk and talking to each other"/>
                <img loading="lazy"className="w-1/2 absolute top-1/2 right-0 max-h-[489px] max-w-[367px] aspect-[367/489]" src={conv2} alt="Image showing 4 women  talking "/>
            </div>
            </div>
            <div className='lg:flex lg:gap-10'>
                <div className='w-[95%] lg:w-1/2 ml-auto sm:mt-12 text-[#546E7A] lg:my-24 lg:ml-0 lg:self-end'>
                    <div className='lg:w-[85%]  lg:ml-auto lg:text-justify'> <p className="  font-[400] leading-[24px] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur est fuga odio! Asperiores commodi consequatur ea enim eos facere inventore modi molestiae odit, officiis qui quod saepe tenetur.Asperiores commodi consequatur ea enim eos facere inventore modi molestiae odit, officiis qui quod saepe tenetur.</p>


                        <p className=" mt-10 font-[500] leading-[24px] text-[14px] lg:text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptatibus!</p>

                        <div className={'mt-6'}>
                            {[0,1,2].map((value) => {
                                return   <div className='flex gap-4 items-center ' key={value}>
                                    <div className="bg-[#204497] w-[13px] h-[13px]"></div>
                                    <p className='font-[500] leading-[26px] text-[14px]'>Nam in massa gravida</p>
                                </div>
                            })}
                        </div>
                        <p className=" mt-10 font-[500] leading-[26px] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fuga quaerat qui repellendus repudiandae! Eos maxime modi optio quaerat sequi! Error quis vel velit? Aspernatur.</p>

                    </div>
                </div>
               <div className='lg:w-1/2 lg:self-center w-full'>
                   <img loading="lazy"className='w-full my-10 lg:aspect-[666/325] lg:w-full  '  src={truck} alt="Image showing truck lonely driving across the streets "/>
               </div>
            </div>

            <div className='mb-10 lg:w-5/6 lg:mx-auto'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    style={{"--swiper-pagination-bullet-size": "10px","--swiper-pagination-color":"#204497", "--swiper-navigation-color":"#204497", }}
                >
                    <SwiperSlide>
                        <div className='w-[77%] lg:w-[88%] mx-auto mb-16'>
                            <div className='flex flex-col gap-3 lg:hidden'>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)}/>
                                <div className='flex  justify-between'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                </div>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)} />
                                <div className='flex gap-2 justify-between mb-6'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                </div>
                            </div>
                            <div className='hidden lg:flex flex-col gap-6 w-full'>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />

                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)} />
                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                </div>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />

                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)}/>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-[77%] lg:w-[88%] mx-auto mb-16'>
                            <div className='flex flex-col gap-3 lg:hidden'>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={dogHorizontal} alt="dog" onClick={() => handleImageClick(dogHorizontal)}/>
                                <div className='flex  justify-between'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                </div>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={dogHorizontal} alt="dog" onClick={() => handleImageClick(dogHorizontal)}/>
                                <div className='flex gap-2 justify-between mb-6'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                </div>
                            </div>
                            <div className='hidden lg:flex flex-col gap-6 w-full'>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>

                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={dogHorizontal} alt="dog" onClick={() => handleImageClick(dogHorizontal)}/>
                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                </div>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>

                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)}/>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[77%] lg:w-[88%] mx-auto mb-16'>
                            <div className='flex flex-col gap-3 lg:hidden'>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={bird} alt="bird" onClick={() => handleImageClick(bird)}/>
                                <div className='flex  justify-between'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                </div>
                                <img loading="lazy"className='w-full rounded-lg aspect-[308/171]'  src={dogHorizontal} alt="dog" onClick={() => handleImageClick(dogHorizontal)}/>
                                <div className='flex gap-2 justify-between mb-6'>
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-[48%] aspect-[146/170]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                </div>
                            </div>
                            <div className='hidden lg:flex flex-col gap-6 w-full'>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />

                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={bird} alt="bird"  onClick={() => handleImageClick(bird)}/>
                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>
                                </div>
                                <div className='flex gap-6 h-80 w-full justify-around'>
                                    <img loading="lazy"className='w-1/4 rounded-lg aspect-[280/326]'  src={dog} alt="dog" onClick={() => handleImageClick(dog)}/>

                                    <img loading="lazy"className='rounded-lg w-1/4  aspect-[280/326]'  src={cat} alt="cat" onClick={() => handleImageClick(cat)} />
                                    <img loading="lazy"className='rounded-lg w-1/2  aspect-[560/326]'  src={dogHorizontal} alt="dog" onClick={() => handleImageClick(dogHorizontal)}/>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>

            {isModalOpen && (
                <>
                    <div className='fixed inset-0 bg-["rgba(0, 0, 0, .7)"] z-50' onClick={closeModal} style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                        <span className="text-white absolute top-4 right-8 text-2xl font-bold cursor-pointer" onClick={closeModal}>&times;</span>
                    </div>
                    <div
                        className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-white z-50 overflow-auto"

                    >

                        <div className="flex justify-center items-center mx-auto w-full h-full max-w-[800px]">
                            <img src={imageModalSrc} alt="Modal Image" />
                        </div>
                    </div>
                </>
            )}

        </main>
    </>
  )
}


