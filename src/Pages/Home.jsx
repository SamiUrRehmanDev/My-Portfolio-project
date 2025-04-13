import React from 'react'
import profile from "../img/sami.jpeg"
import star from "../img/star.png"
import star1 from "../img/star1.png"
import home from "../img/home.png"
import about from "../img/id-card.png"
import service from "../img/isometric-cube-view.png"
import email from "../img/email.png"
import github from "../img/github.png"
import linkedin from "../img/linkedin.png"
import Insta from "../img/instagram.png"
import facebook from "../img/facebook.png"
import background from "../img/background.jpg"

function Home() {
  return (
    <div className='m-0 p-0'> 
        <div style={{ backgroundImage: `url(${background})` }}>
        <div  class="w-[70%] mx-auto relative h-[1000px] sm:h-[700px]">
            <div class="absolute top-0 mt-5 left-0 pt-3 pl-3 border-t-[1px] border-white border-l-[1px] w-[60px] h-[60px]">
                <div class="w-[80%] h-[80%] border-t-[1px] border-white border-l-[1px]"></div>
            </div>
            <div
                class="absolute top-0 right-0 pt-3 mt-5 pr-3 place-items-end border-t-[1px] border-white border-r-[1px] w-[60px] h-[60px]">
                <div class="w-[80%] h-[80%] border-t-[1px] border-white border-r-[1px]"></div>
            </div>
            <div
                class="absolute bottom-0 left-0 pb-3 pl-3 flex justify-start items-end border-b-[1px] border-white border-l-[1px] w-[60px] h-[60px]">
                <div class="w-[80%] h-[80%] border-b-[1px] border-white border-l-[1px]"></div>
            </div>
            <div
                class="absolute bottom-0 right-0 pb-3 pr-3 flex items-end justify-end border-b-[1px] border-white border-r-[1px] w-[60px] h-[60px]">
                <div class="w-[80%] h-[80%] border-b-[1px] border-white border-r-[1px]"></div>
            </div>
            <div class="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 justify-between absolute top-[17%]">
                <div>
                    <h3 class="font-dancing text-white text-[16px] sm:text-[20px]  lg:text-[26px]">Assalam O Alikum</h3>
                    <h2 class="text-white text-[16px] sm:text-[20px]  lg:text-[26px] mt-2 font-raleway">I'm a Mern Stack Developer</h2>
                    <p class="text-white text-[10px] sm:text-[12px]  lg:text-[16px] mt-2 font-raleway py-[17px] text-justify">A skilled Full Stack
                        Developer and Designer. Proficient in the
                        MERN
                        stack, especially Nextjs, I bring innovation to life. With a Software
                        Engineering background, I craft clean code and captivating designs.
                        Ready to tackle new challenges and contribute seamlessly to your
                        team's success.
                    </p>
                    <div class="flex justify-around items-center mt-5">
                        <div class="flex flex-col text-white items-center justify-center">
                            <h2 class="text-4xl font-light font-raleway">2+</h2>
                            <span class="mt-2">Years of work</span>
                        </div>
                        <div class="flex flex-col text-white items-center justify-center">
                            <h2 class="text-4xl font-light font-raleway">5+</h2>
                            <span class="mt-2">Completed Projects</span>
                        </div>
                        <div class="flex flex-col text-white items-center justify-center">
                            <h2 class="text-4xl font-light font-raleway">1+</h2>
                            <span class="mt-2">Satisfied Customer</span>
                        </div>
                    </div>
                    <div class="mt-10 w-[50%]">
                        <ul class="text-white text-sm flex max-[700px]:gap-4 justify-between items-center">
                            <li>
                                <a href="/main/index.html" class="flex flex-col items-center justify-center">
                                    <img class="w-7" src={home} alt="home"/>
                                    <span class="text-sm  ">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="/main/about.html" class="flex flex-col items-center justify-center h-[40px]">
                                    <img class="w-7" src={about} alt="about"/>
                                    <span class="text-sm   hover:block">About</span>
                                </a>
                            </li>
                            <li>
                                <a href="/main/services.html" class="flex flex-col items-center justify-center">
                                    <img class="w-7" src={service} alt="home"/>
                                    <span class="text-sm">Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="/main/contact.html" class="flex flex-col items-center justify-center">
                                    <img class="w-7" src={email} alt="contact"/>
                                    <span class="text-sm">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center items-center relative">
                <div class="bg-[#583b87] justify-center items-center sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] border-2 border-transparent hover:border-white rounded-full">
                        <img className='sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]  rounded-full' src={profile} class="bg-transparent rounded-full" alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        <div class="bg-[#121518] max-h-max pb-10 w-full">
        <div class="sm:w-[70%] mx-auto pt-10">
            <p class="font-dancing text-4xl text-center text-white ">Who I am</p>
            <div class="flex justify-center items-center w-[60%] mx-auto mt-5">
                <div class="border-2 border-[#583b87]  w-[25%] rounded-l-[50%]"></div>
                <div class="text-[#583b87] text-sm p-3 border-dashed border-[#583b87] border-[1px] font-bold">
                    <p>About Us</p>
                </div>
                <div class="border-2 border-[#583b87]  w-[25%] rounded-r-[50%]"></div>
            </div>
            <div class="mt-20 w-full flex flex-col sm:flex-row justify-between items-center">
                <div class="w-[25%] max-[600px]:mb-10">
                    <img class="border-4 border-[#272b30] rounded-full" src={profile} alt=""/>
                </div>
                <div class="w-[70%]">
                    <span class="p-5 font-dancing bg-[#583b87] rounded-xl text-white text-sm sm:text-xl">Sami Ur Rehman</span>
                    <p class="text-white mt-10 text-[12px] sm:text-lg text-justify">I am an expert full-stack developer and designer,
                        specializing in the MERN stack and
                        specializing in Nextjs. My educational background includes a software engineering
                        degree, fostering a strong technical aptitude. Throughout my career, I have contributed
                        to diverse projects while honing my coding skills and collaborative abilities. My
                        dedication to clean code and smooth user experiences drives my work. I am eager to
                        take on new challenges to stay updated with industry trends. If you are looking for a
                        dedicated professional with a combination of technical expertise and design sensibility,
                        I look forward to learning how I can enhance your team.</p>
                    <div class="w-[25%] flex justify-between max-[700px]:gap-2 items-center h-40">
                        <a href="https://github.com/MBadarMurtaza" class="w-7"><img src={github}
                                alt="github"/></a>
                        <a href="https://www.linkedin.com/in/mbadarmurtaza/" class="w-7"><img src={linkedin}
                                alt="github"/></a>
                        <a href="https://www.instagram.com/mr.badarmurtaza/" class="w-7"><img src={Insta}
                                alt="github"/></a>
                        <a href="https://www.facebook.com/mr.badarmurtaza" class="w-7"><img src={facebook}
                                alt="github"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:w-[70%] mx-auto pt-10">
            <p class="font-dancing text-4xl text-center text-white ">Tools</p>
            <div class="flex justify-center items-center w-[60%] mx-auto mt-5">
                <div class="border-2 border-[#583b87]  w-[25%] rounded-l-[50%]"></div>
                <div class="text-[#583b87] text-sm p-3 border-dashed border-[#583b87] border-[1px] font-bold">
                    <p>Skills</p>
                </div>
                <div class="border-2 border-[#583b87]  w-[25%] rounded-r-[50%]"></div>
            </div>
            <p class="text-sm text-center text-[#888888] mx-auto mt-2 w-[50%]">I possess a versatile skill set that
                seamlessly merges coding and design, resulting in
                impactful digital experiences.
            </p>
            <div class="mt-10 ">
                <div>
                    <span
                        class="font-raleway text-white max-[700px]:flex justify-center items-center text-3xl border-b-[2px] border-[#a98eda] border-dashed pb-2">Web
                    Designing</span>
                    <div class="w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center mt-2 flex-wrap">
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg viewBox="0 0 15 15" fill="#a98eda" class="w-7" xmlns="http://www.w3.org/2000/svg"
                                    stroke="#">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                                            fill="#a98eda"></path>
                                    </g>
                                </svg>
                                <p class="text-white text-xl ml-2">Figma</p>
                            </div>
                            <span class="text-[#888888] text-sm">(Software)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <path
                                        d="M18.835.3H5.165A5.165 5.165 0 0 0 0 5.465v13.07A5.165 5.165 0 0 0 5.165 23.7h13.67A5.165 5.165 0 0 0 24 18.535V5.465A5.165 5.165 0 0 0 18.835.3zm-6.106 16.491h-2.287c-.16 0-.274-.006-.338-.113-.215-.419-.43-.835-.644-1.248a45.137 45.137 0 0 0-.684-1.264 66.961 66.961 0 0 1-.717-1.305h-.016a52.7 52.7 0 0 1-.668 1.288c-.23.429-.459.856-.684 1.28A54.85 54.85 0 0 1 6 16.693c-.044.097-.119.107-.227.107H3.568c-.043 0-.067.017-.072-.026a.166.166 0 0 1 .024-.113l3.107-5.105L3.6 6.438c-.033-.043-.038-.078-.016-.107a.115.115 0 0 1 .097-.04h2.27a.36.36 0 0 1 .145.024.292.292 0 0 1 .096.089c.193.43.408.859.644 1.288.236.429.475.853.716 1.272.241.419.464.843.668 1.272h.016c.213-.44.43-.869.652-1.288.222-.419.447-.84.676-1.264.231-.425.453-.847.668-1.264a.246.246 0 0 1 .064-.106.239.239 0 0 1 .129-.024h2.109a.093.093 0 0 1 .112.067.093.093 0 0 1-.031.094l.001.004-2.995 4.943 3.204 5.249c.021.037.026.08.016.121-.01.036-.047.012-.112.023zm7.681-.42a8.02 8.02 0 0 1-1.626.483 8.63 8.63 0 0 1-1.547.145 5.006 5.006 0 0 1-2.149-.45 3.421 3.421 0 0 1-1.506-1.361 4.348 4.348 0 0 1-.548-2.278 4.202 4.202 0 0 1 .548-2.109 4.018 4.018 0 0 1 1.595-1.545 5.139 5.139 0 0 1 2.737-.572c.086.005.188.013.306.024V5.536c0-.075.032-.113.097-.113h2.028a.086.086 0 0 1 .097.073.096.096 0 0 1 0 .024v9.517c0 .183.008.381.024.596.016.214.03.407.04.579a.163.163 0 0 1-.096.159zm-2.457-5.812c.09.009.179.025.266.048v4.395a1.634 1.634 0 0 1-.354.064 4.965 4.965 0 0 1-.419.016 2.656 2.656 0 0 1-.83-.129 1.714 1.714 0 0 1-.676-.402 1.973 1.973 0 0 1-.451-.708 2.83 2.83 0 0 1-.169-1.031 2.217 2.217 0 0 1 .33-1.272c.213-.316.504-.571.845-.741.35-.173.736-.262 1.127-.258.111.002.221.007.331.018z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Adobe XD</p>
                            </div>
                            <span class="text-[#888888] text-sm">(Software)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg fill="#a98eda" class="w-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z">
                                        </path>
                                    </g>
                                </svg>
                                <p class="text-white text-xl ml-2">Tailwind</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg viewBox="0 0 24 24" fill="#a98eda" class="w-7" xmlns="http://www.w3.org/2000/svg"
                                    stroke="">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z"
                                            fill="#a98eda"></path>
                                    </g>
                                </svg>
                                <p class="text-white text-xl ml-2">Bootstrap</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mt-10">
                    <span
                        class="font-raleway text-white max-[700px]:flex max-[700px]:justify-center text-3xl border-b-[2px] border-[#a98eda] border-dashed pb-2">Web
                        Development</span>
                    <div class="w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center mt-2 flex-wrap">
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 384 512">
                                    <path
                                        d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">CSS</p>
                            </div>
                            <span class="text-[#888888] text-sm">(linkedin Badge)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 384 512">
                                    <path
                                        d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">HTML</p>
                            </div>
                            <span class="text-[#888888] text-sm">(linkedin Badge)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">JavaScript</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Node.js</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">MongoDB</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <span
                        class="font-raleway max-[700px]:flex max-[700px]:justify-center text-white text-3xl border-b-[2px] border-[#a98eda] border-dashed pb-2">MERN
                        Stack</span>
                    <div class="w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center mt-2 flex-wrap">
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="11.245" r="1.785"></circle>
                                    <path
                                        d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z">
                                    </path>
                                    <path
                                        d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z">
                                    </path>
                                    <path
                                        d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z">
                                    </path>
                                    <path
                                        d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">React</p>
                            </div>
                            <span class="text-[#888888] text-sm">(linkedin Badge)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Next.js</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <path
                                        d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Express.js</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="M69.953.309c-1.676.07-4.508.52-4.508.71 0 .079 1.996 1.079 2.149 1.079.14 0 2.457 1.156 2.972 1.476.672.43 1.153.82 1.012.82-.09 0-2.469-.921-3.371-1.308-.734-.309-3.785-1.219-5.27-1.57-.804-.188-1.144-.258-2.511-.508C58.41.64 56.039.618 55.008.957c-1.477.48-1.809 1.07-1.809 3.246 0 1.2.059 1.707.32 2.785.114.469.434 1.5.583 1.848.043.11.183.45.3.75.121.297.485 1.066.805 1.695 1.797 3.567 4.488 6.54 8.281 9.156 1.196.82 4.446 2.375 5.75 2.747.332.09.442.277.172.277-.3 0-3.05-.758-3.613-.996a9.982 9.982 0 0 0-.652-.262c-1.957-.789-4.457-2.414-6.524-4.262a21.38 21.38 0 0 1-5.312-7.257c-.793-1.79-1.332-3.875-1.465-5.692-.078-1.039-.16-1.289-.43-1.277-.09 0-.945-.031-1.887-.082-2.562-.11-6.062.172-9.527.77-6.625 1.128-13.773 3.734-21.129 7.706a94.93 94.93 0 0 0-3.625 2.067c-.14.082-.582.351-.984.601-.399.25-.871.528-1.043.637-.38.223-4.586 3.078-5.09 3.457-.188.137-.711.527-1.152.848C4.98 21.195.633 24.742.383 25.102c-.121.18.07.27.328.18.133-.052.473-.122.746-.16.281-.044 1.004-.231 1.605-.43.61-.192 1.266-.391 1.454-.442 1.488-.348 2.09-.469 2.96-.598.395-.05.977-.14 1.305-.191 4.078-.598 6.024-.746 7.84-.61 3.945.32 7.719.993 9.879 1.758 1.617.582 4.906 2.36 6.352 3.426.836.63 3.523 3.305 4.117 4.113.46.641.972 1.2 1.093 1.2.04 0 .09-2.04.102-4.524l.027-4.512 5.282-.03c4.156-.02 5.308.011 5.379.1.101.13.343.56 1.136 2.024.754 1.41 1.125 2.09 1.356 2.496.12.223.398.739.633 1.149.218.41.628 1.168.91 1.687.281.52.511.961.511.98 0 .09.414.63.485.63.039 0 .14-.153.21-.32.079-.18.29-.579.462-.88.18-.3.5-.886.722-1.296.223-.41.524-.98.684-1.25.441-.79.902-1.645 1.285-2.344A84.813 84.813 0 0 1 58.5 24.96c.129-.25.29-.512.34-.578.082-.09 1.265-.121 5.543-.102l5.43.031.03 8.817c.02 6.945.048 8.805.15 8.805.058-.012.46-.243.874-.532.582-.406.832-.656 1.102-1.117.613-1.047 2.351-2.695 3.515-3.336A16.556 16.556 0 0 1 80 35.254c1.605-.34 2.078-.39 5.723-.52 6.652-.23 7.636-.27 7.687-.32.031-.027-.058-.289-.191-.59-.14-.289-.38-.828-.551-1.187-.633-1.367-.633-1.825.031-2.496.45-.47 1.613-.88 3.613-1.278.329-.07.743-.16.91-.218.173-.051.383-.09.473-.09.254 0 2.25-.489 2.672-.649.29-.12 1.856-.46 3.723-.82.812-.16 2.922-.578 4.668-.93 1.105-.218 2.258-.449 2.558-.508.301-.058.735-.148.954-.187.222-.05.511-.113.652-.133.14-.027.844-.168 1.558-.316a33.704 33.704 0 0 1 1.614-.313c.504-.047 4.289-.957 5.16-1.238 1.387-.45 1.797-.629 2.672-1.215.941-.64 1.203-.988 2.136-2.848 1.036-2.066 1.184-2.414 1.477-3.285.45-1.386.422-1.914-.152-2.496-.403-.398-1.266-.808-1.895-.898-.472-.059-.535-.04-.765.21-.141.15-.262.329-.262.391 0 .09-.16.528-.61 1.606-.043.11-.132.379-.203.597-.058.223-.18.532-.25.7-.129.28-.14.23-.09-.547.051-.77.18-1.418.473-2.399.051-.187.121-.507.149-.707l.05-.36-1.043-.417c-1.085-.45-2.02-.84-2.558-1.082-.184-.066-.633-.246-1.004-.387-.383-.14-.844-.32-1.035-.41a23.9 23.9 0 0 0-1.055-.437c-.672-.262-3.02-1.059-5.02-1.688a458.117 458.117 0 0 0-4.011-1.21 36.162 36.162 0 0 1-1.406-.388c-.16-.043-.555-.152-.856-.23-1.766-.488-2.226-.61-2.86-.79a26.367 26.367 0 0 0-1.054-.28c-.191-.047-.71-.168-1.152-.278-.774-.191-4.016-.937-5.774-1.34l-1.254-.289c-.222-.05-.62-.129-.902-.18-.273-.05-.844-.16-1.258-.25-.41-.077-1.293-.25-1.957-.359-.66-.117-1.453-.257-1.754-.308-2.773-.5-2.96-.528-7.93-1.078-3.062-.348-7.18-.641-8.183-.59-.16 0-1.05.039-1.965.09zM58.348 5.23c2.652.86 5.23 2.028 6.996 3.168 1.406.907 3.152 2.356 3.625 3.004l.199.27-.379-.149c-.21-.09-.652-.28-.984-.441-1.766-.82-1.957-.887-1.957-.707 0 .047.41.707.902 1.445.504.75.902 1.41.902 1.47 0 .05-.187-.032-.422-.192-.902-.618-3.02-1.508-3.14-1.328-.031.05.62.878 1.457 1.847.82.969 1.504 1.797 1.504 1.86 0 .148-.16.128-.922-.153-.785-.277-.984-.308-.984-.117 0 .129 1.695 2.414 2.367 3.203.191.219.343.43.343.48 0 .239-2.351-1.288-4.015-2.605-2.38-1.898-4.68-4.445-5.89-6.55-.997-1.72-1.337-2.645-1.337-3.665 0-.597.028-.718.25-.93.13-.136.293-.25.352-.25.058 0 .562.153 1.133.34zm31.691 3.555c.961.172 2.277.399 2.91.512.633.11 1.406.238 1.707.289.301.059.73.137.953.187.22.051.653.141.954.211.992.22 1.234.27 2.859.649 1.746.41 2.129.488 2.66.597.453.09.902.262.902.34 0 .032-.328.223-.73.43-.824.41-.996.441-4.387.57-2.308.098-3.543.07-4.668-.11-2.27-.35-3.441-.987-4.355-2.366-.32-.469-.531-.61-1.266-.797-.27-.082-.683-.192-.902-.262-.223-.07-.602-.18-.844-.25-.723-.187-.312-.297 1.145-.297 1.003 0 1.707.067 3.062.297zm12.074 13.95a.54.54 0 0 1-.25 0c-.07-.032-.02-.051.121-.051.137 0 .188.02.13.05zm-.433.117c0 .05-.117.12-.27.152-.312.078-1.535.43-1.937.558-.141.051-.594.192-1.004.31-1.035.3-3.543 1.116-4.215 1.378-1.266.48-4.238 2.055-4.656 2.477-.625.609-.817 1.265-.723 2.523.027.531.098 1.2.16 1.488.121.63.05.801-.191.489-.242-.309-.754-1.426-.903-1.977-.082-.246-.171-.578-.222-.738-.18-.567-.11-1.239.172-1.645.379-.582 1.746-1.508 3.351-2.277.762-.371 2.98-1.13 5.02-1.727.41-.12.863-.261 1.004-.3 1.445-.489 4.414-.958 4.414-.711zm-31.746.671c-.032.028-.121.04-.192.008-.082-.027-.05-.058.059-.058.113-.012.172.02.133.05zm0 0"
                                        transform="translate(0 39)"></path>
                                    <path
                                        d="M48.883 42.832v6.988h5c3.754 0 5.027-.03 5.117-.12.152-.15.184-13.856.031-13.856-.05 0-.12.078-.152.168-.04.09-1.133 1.797-2.438 3.793-2.066 3.156-2.64 3.925-2.64 3.535 0-.07-3.422-5.41-4.297-6.7a3.725 3.725 0 0 1-.309-.527c-.082-.152-.18-.27-.23-.27-.043 0-.082 3.145-.082 6.989zm0 0"
                                        transform="translate(0 39)"></path>
                                </svg>
                                <p class="text-white text-xl ml-2">mongoose.js</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.661 15.549a1.315 1.315 0 0 0 1.185-1.386 1.363 1.363 0 0 0-1.35-1.302h-.048a1.352 1.352 0 0 0-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 0 1 1.658-1.931 7.88 7.88 0 0 1-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z">
                                    </path>
                                    <path
                                        d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 0 0 1.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z">
                                    </path>
                                    <path
                                        d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 0 0 1.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">MongoDB</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <path
                                        d="M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">MongoDB</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <span
                        class="font-raleway text-white max-[700px]:flex max-[700px]:justify-center text-3xl border-b-[2px] border-[#a98eda] border-dashed pb-2">Deployment</span>
                    <div class="w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center mt-2 flex-wrap">
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Ubuntu</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <path
                                        d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Nginx</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <span
                        class="font-raleway max-[700px]:flex max-[700px]:justify-center text-white text-3xl border-b-[2px] border-[#a98eda] border-dashed pb-2">Software
                        Engineering</span>
                    <div class="w-[90%] mx-auto flex sm:flex-row flex-col justify-between items-center mt-2 flex-wrap">
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg stroke="currentColor" fill="#a98eda" class="w-7" stroke-width="0"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">Git</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg viewBox="0 0 496 512" class="w-7" fill="#a98eda"
                                    xmlns="http: //www.w3.org/2000/svg">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">GitHub</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" viewBox="0 0 128 128">
                                    <path fill="#a98eda"
                                        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z">
                                    </path>
                                    <path fill="#6f42c1"
                                        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z">
                                    </path>
                                    <path fill="#fff"
                                        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">C</p>
                            </div>
                            <span class="text-[#888888] text-sm">(linkedin Badge)</span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                        <div class="w-[45%] flex justify-between items-center mt-5">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="#a98eda"
                                    viewBox="0 0 128 128">
                                    <path fill="#6f42c1"
                                        d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0">
                                    </path>
                                    <path fill="#6f42c1"
                                        d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0">
                                    </path>
                                    <path fill="#a98eda"
                                        d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0">
                                    </path>
                                    <path fill="#fff"
                                        d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z">
                                    </path>
                                </svg>
                                <p class="text-white text-xl ml-2">C++</p>
                            </div>
                            <span class="text-[#888888] text-sm"></span>
                            <div class="flex item-center max-[600px]:gap-1 justify-evenly w-[65%] sm:w-[30%]">
                            <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star} alt="" class="w-5 sm:w-7"/>
                                <img src={star1} alt="" class="w-5 sm:w-7"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#1e2124] h-max-h">
        <div class="sm:w-[70%] mx-auto pt-10 ">
            <p class="font-dancing text-4xl text-center text-white ">What Do We Offer</p>
            <div class="flex justify-center items-center w-[60%] mx-auto mt-5">
                <div class="border-2 border-[#a98eda]  w-[25%] rounded-l-[50%]"></div>
                <div class="text-[#a98eda] text-sm p-3 border-dashed border-[#a98eda] border-[1px] font-bold">
                    <p>Services</p>
                </div>
                <div class="border-2 border-[#a98eda] w-[25%] rounded-r-[50%]"></div>
            </div>
            <p class="text-sm text-center font-semibold text-[#888888] mx-auto mt-2 w-52">That services we are provided
                our
                customers</p>

            <div class="grid grid-cols-2 sm:grid-cols-3 w-[80%] justify-between mx-auto sm:gap-10 sm:w-full mt-10">
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="#ffff"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                                viewBox="0 0 419.931 419.931" xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624     v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293     V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146     c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066     C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702     c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z      M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702     h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702     c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z">
                                            </path>
                                            <path
                                                d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38     l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68     c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104     v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392     c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679     c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38     l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744     c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695     c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711     c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709     l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224     c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361     s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345     c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809     l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492     c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787     c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327     c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336     c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z">
                                            </path>
                                            <g>
                                                <path
                                                    d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118      v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333      c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336      c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373      L164.695,235.373z">
                                                </path>
                                                <path
                                                    d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27      c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516      l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z">
                                                </path>
                                                <path
                                                    d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912      c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331      c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923      c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877      C315.094,200.735,312.311,196.371,308.001,194.366z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">Full-Stack Development</h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Comprehensive front-end and back-end
                        development for web and mobile applications.</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg xmlns="http: //www.w3.org/2000/svg" class="w-8 h-8" fill="#ffffff" viewBox="0 0 64 64"
                                id="ecommerce">
                                <path
                                    d="M46.33 25.66H23.86l-.51-2.83c-.12-.68-.72-1.18-1.41-1.18h-4.27a1.43 1.43 0 1 0 0 2.86h3.07l2.58 14.23c.02.1.21 1 .74 2.04 1.03 2.05 3.11 3.32 5.42 3.32h14.26a1.43 1.43 0 1 0 0-2.86H29.49c-1.21 0-2.33-.68-2.86-1.74-.1-.21-.19-.41-.26-.58h15.85c1.68 0 3.07-.71 3.9-2.01.36-.56.58-1.2.67-1.93l.96-7.73c.05-.41-.08-.82-.35-1.13-.27-.29-.66-.46-1.07-.46zm-2.38 8.98c-.04.29-.12.54-.24.73-.3.47-.77.69-1.49.69H25.75l-1.37-7.54H44.7l-.75 6.12zM28.26 44.73c-1.84 0-3.34 1.5-3.34 3.34 0 1.84 1.5 3.34 3.34 3.34 1.84 0 3.34-1.5 3.34-3.34 0-1.84-1.5-3.34-3.34-3.34zm0 3.82a.48.48 0 1 1 0-.96.48.48 0 0 1 0 .96zm12.87-3.82c-1.84 0-3.34 1.5-3.34 3.34 0 1.84 1.5 3.34 3.34 3.34 1.84 0 3.34-1.5 3.34-3.34 0-1.84-1.5-3.34-3.34-3.34zm0 3.82a.48.48 0 1 1 .48-.48c-.01.27-.22.48-.48.48z">
                                </path>
                                <path
                                    d="M59.46.65H4.54C2.04.65 0 2.68 0 5.19v53.62c0 2.5 2.04 4.54 4.54 4.54h54.92c2.5 0 4.54-2.04 4.54-4.54V5.19C64 2.68 61.96.65 59.46.65zm1.67 58.16c0 .92-.75 1.68-1.68 1.68H4.54c-.92 0-1.68-.75-1.68-1.68V12.58h58.27v46.23zm0-49.1H2.87V5.19c0-.92.75-1.68 1.68-1.68h54.92c.92 0 1.68.75 1.68 1.68v4.52z">
                                </path>
                                <path
                                    d="M7.71 5.18c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm5.31 0c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm5.31 0c-.8 0-1.44.64-1.44 1.43s.65 1.43 1.44 1.43a1.43 1.43 0 1 0 0-2.86zm37.98 0H45.75a1.43 1.43 0 1 0 0 2.86h10.57c.79 0 1.43-.64 1.43-1.43s-.65-1.43-1.44-1.43zM7.04 57.13h49.93c.79 0 1.43-.64 1.43-1.43V17.37c0-.79-.64-1.43-1.43-1.43H7.04c-.79 0-1.43.64-1.43 1.43V55.7c-.01.79.64 1.43 1.43 1.43zM8.47 18.8h47.06v35.46H8.47V18.8z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">E-Commerce Solutions</h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Scalable, secure, and customized platforms
                        to drive your online business.</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg version="1.1" id="Capa_1" xmlns="http: //www.w3.org/2000/svg" class="w-8 h-8"
                                fill="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511"
                                xml:space="preserve" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M492.168,309.579l-17.626-10.177c2.96-14.723,4.458-29.466,4.458-43.902c0-14.646-1.474-29.403-4.384-43.946l17.552-10.134 c5.436-3.138,9.325-8.206,10.949-14.269s0.791-12.396-2.348-17.832l-48-83.139c-3.139-5.436-8.206-9.325-14.269-10.949 c-6.064-1.624-12.396-0.791-17.833,2.348l-17.566,10.142C380.912,68.2,354.798,53.092,327,43.692V23.5 C327,10.542,316.458,0,303.5,0h-96C194.542,0,184,10.542,184,23.5v20.193c-27.65,9.362-53.728,24.49-75.999,44.088L90.332,77.579 c-5.437-3.139-11.77-3.973-17.833-2.348c-6.063,1.625-11.13,5.513-14.269,10.949l-48,83.139 c-3.139,5.436-3.972,11.769-2.348,17.832s5.513,11.131,10.949,14.269l17.626,10.177C33.499,226.32,32,241.063,32,255.5 c0,14.644,1.474,29.401,4.384,43.945l-17.552,10.134c-11.222,6.479-15.08,20.879-8.602,32.102l48,83.139 c6.479,11.221,20.879,15.08,32.102,8.601l17.565-10.142c22.19,19.521,48.303,34.629,76.103,44.03V487.5 c0,12.958,10.542,23.5,23.5,23.5h96c12.958,0,23.5-10.542,23.5-23.5v-20.193c27.651-9.362,53.729-24.49,76-44.087l17.668,10.201 c11.221,6.479,25.623,2.62,32.102-8.601l48-83.139C507.248,330.458,503.39,316.058,492.168,309.579z M487.779,334.181l-48,83.138 c-2.343,4.06-7.552,5.455-11.611,3.111l-22.392-12.928c-2.845-1.643-6.43-1.242-8.842,0.989 c-22.893,21.173-50.437,37.148-79.653,46.199c-3.14,0.973-5.281,3.877-5.281,7.164V487.5c0,4.687-3.813,8.5-8.5,8.5h-96 c-4.687,0-8.5-3.813-8.5-8.5v-25.645c0-3.287-2.141-6.191-5.28-7.164c-29.396-9.107-56.974-25.062-79.755-46.139 c-1.421-1.315-3.25-1.995-5.095-1.995c-1.286,0-2.579,0.33-3.748,1.005L82.832,420.43c-4.06,2.343-9.268,0.948-11.611-3.111 l-48-83.138c-2.343-4.059-0.947-9.268,3.111-11.612l22.272-12.859c2.844-1.642,4.289-4.942,3.566-8.146 C48.739,286.357,47,270.858,47,255.5c0-15.1,1.765-30.584,5.247-46.022c0.722-3.203-0.723-6.504-3.566-8.145L26.332,188.43 c-1.966-1.135-3.372-2.968-3.96-5.161c-0.587-2.193-0.286-4.484,0.849-6.45l48-83.139c1.135-1.966,2.968-3.373,5.162-3.96 c2.192-0.588,4.484-0.286,6.45,0.849l22.392,12.928c2.846,1.644,6.43,1.242,8.842-0.989c22.894-21.173,50.437-37.148,79.653-46.199 c3.14-0.973,5.281-3.877,5.281-7.164V23.5c0-4.687,3.813-8.5,8.5-8.5h96c4.687,0,8.5,3.813,8.5,8.5v25.645 c0,3.287,2.141,6.191,5.28,7.164c29.395,9.106,56.973,25.061,79.755,46.139c2.412,2.232,5.997,2.633,8.843,0.99l22.29-12.869 c1.967-1.135,4.258-1.437,6.45-0.849c2.193,0.588,4.026,1.994,5.162,3.96l48,83.139c1.135,1.966,1.437,4.257,0.849,6.45 c-0.588,2.193-1.994,4.026-3.96,5.161l-22.272,12.859c-2.844,1.642-4.289,4.943-3.566,8.146c3.431,15.206,5.17,30.704,5.17,46.065 c0,15.1-1.765,30.584-5.247,46.021c-0.722,3.203,0.723,6.503,3.566,8.145l22.349,12.903 C488.727,324.913,490.123,330.122,487.779,334.181z">
                                        </path>
                                        <path
                                            d="M255.5,104C171.962,104,104,171.963,104,255.5S171.962,407,255.5,407S407,339.037,407,255.5S339.038,104,255.5,104z M255.5,392C180.234,392,119,330.766,119,255.5S180.234,119,255.5,119S392,180.234,392,255.5S330.766,392,255.5,392z">
                                        </path>
                                        <path
                                            d="M283.5,216h-28c-4.142,0-7.5,3.358-7.5,7.5v64c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V271h20.5 c15.164,0,27.5-12.336,27.5-27.5S298.664,216,283.5,216z M283.5,256H263v-25h20.5c6.893,0,12.5,5.607,12.5,12.5 S290.393,256,283.5,256z">
                                        </path>
                                        <path
                                            d="M214.522,220.867c-1.098-2.927-3.896-4.867-7.022-4.867h-8c-3.126,0-5.925,1.939-7.022,4.867l-24,64 c-1.455,3.878,0.511,8.201,4.389,9.656c3.878,1.455,8.201-0.511,9.656-4.389L186.697,279h33.605l4.175,11.133 c1.129,3.011,3.987,4.869,7.023,4.869c0.875,0,1.765-0.154,2.632-0.479c3.878-1.454,5.844-5.778,4.389-9.656L214.522,220.867z M192.322,264l11.178-29.807L214.678,264H192.322z">
                                        </path>
                                        <path
                                            d="M327.5,216c-4.142,0-7.5,3.358-7.5,7.5v64c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-64 C335,219.358,331.642,216,327.5,216z">
                                        </path>
                                        <path
                                            d="M309.152,87.3c5.205,1.659,10.394,3.586,15.421,5.726c0.958,0.408,1.954,0.601,2.934,0.601c2.916,0,5.69-1.712,6.904-4.564 c1.622-3.811-0.152-8.216-3.963-9.838c-5.458-2.323-11.09-4.415-16.742-6.216c-3.945-1.258-8.165,0.922-9.423,4.868 C303.026,81.823,305.206,86.042,309.152,87.3z">
                                        </path>
                                        <path
                                            d="M100.45,339.904c-1.984-3.636-6.541-4.976-10.176-2.992c-3.636,1.984-4.976,6.54-2.992,10.176 c3.112,5.704,6.557,11.315,10.239,16.677c1.454,2.117,3.801,3.255,6.189,3.255c1.463,0,2.941-0.427,4.239-1.318 c3.415-2.345,4.282-7.014,1.937-10.428C106.493,350.332,103.318,345.161,100.45,339.904z">
                                        </path>
                                        <path
                                            d="M240.14,431.341c-40.189-3.463-78.337-20.879-107.416-49.041c-2.976-2.882-7.724-2.805-10.605,0.17 c-2.881,2.976-2.806,7.724,0.17,10.605c31.55,30.555,72.947,49.452,116.563,53.21c0.219,0.019,0.436,0.028,0.652,0.028 c3.851,0,7.127-2.949,7.464-6.856C247.323,435.331,244.266,431.697,240.14,431.341z">
                                        </path>
                                        <path
                                            d="M363.425,97.287c-3.42-2.337-8.087-1.459-10.424,1.96c-2.337,3.42-1.459,8.087,1.96,10.424 c34.844,23.813,60.049,59.248,70.972,99.776c0.902,3.346,3.93,5.55,7.237,5.55c0.646,0,1.303-0.084,1.956-0.26 c4-1.078,6.368-5.194,5.29-9.193C428.564,161.564,401.221,123.118,363.425,97.287z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">API Integration Services</h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Seamless integration of third-party APIs for
                        enhanced functionality.</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg version="1.1" id="Capa_1" xmlns="http: //www.w3.org/2000/svg" class="w-8 h-8"
                                fill="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.477 488.477"
                                xml:space="preserve" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M472.227,35.998H16.25C7.29,35.998,0,43.288,0,52.248v383.98c0,8.96,7.29,16.25,16.25,16.25h455.977 c8.96,0,16.25-7.29,16.25-16.25V52.248C488.477,43.288,481.186,35.998,472.227,35.998z M8.5,335.307h62.574 c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H8.5V102.805h471.477v43.834h-88.883c-2.348,0-4.25,1.902-4.25,4.25 c0,2.348,1.902,4.25,4.25,4.25h88.883v201.668H377.404c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h102.572v45.998 H8.5V335.307z M16.25,44.498h455.977c4.273,0,7.75,3.477,7.75,7.75v15.057H170.094c-2.348,0-4.25,1.902-4.25,4.25 c0,2.348,1.902,4.25,4.25,4.25h309.883v18.5H8.5V52.248C8.5,47.975,11.977,44.498,16.25,44.498z M472.227,443.978H16.25 c-4.273,0-7.75-3.476-7.75-7.75v-16.424h471.477v16.424C479.977,440.502,476.5,443.978,472.227,443.978z">
                                        </path>
                                        <path
                                            d="M38.094,84.805c8.409,0,15.25-6.841,15.25-15.25s-6.841-15.25-15.25-15.25c-8.409,0-15.25,6.841-15.25,15.25 S29.685,84.805,38.094,84.805z M38.094,62.805c3.722,0,6.75,3.028,6.75,6.75c0,3.722-3.028,6.75-6.75,6.75 c-3.722,0-6.75-3.028-6.75-6.75C31.344,65.833,34.372,62.805,38.094,62.805z">
                                        </path>
                                        <path
                                            d="M80.594,84.805c8.409,0,15.25-6.841,15.25-15.25s-6.841-15.25-15.25-15.25c-8.409,0-15.25,6.841-15.25,15.25 S72.185,84.805,80.594,84.805z M80.594,62.805c3.722,0,6.75,3.028,6.75,6.75c0,3.722-3.028,6.75-6.75,6.75 c-3.722,0-6.75-3.028-6.75-6.75C73.844,65.833,76.872,62.805,80.594,62.805z">
                                        </path>
                                        <path
                                            d="M123.094,84.805c8.409,0,15.25-6.841,15.25-15.25s-6.841-15.25-15.25-15.25c-8.409,0-15.25,6.841-15.25,15.25 S114.685,84.805,123.094,84.805z M123.094,62.805c3.722,0,6.75,3.028,6.75,6.75c0,3.722-3.028,6.75-6.75,6.75 c-3.722,0-6.75-3.028-6.75-6.75C116.344,65.833,119.372,62.805,123.094,62.805z">
                                        </path>
                                        <path
                                            d="M142.726,184.751c-0.001-3.085-1.549-6.019-4.248-8.048l-75.264-56.591c-2.087-1.568-4.574-2.397-7.191-2.397 c-3.762,0-7.352,1.786-9.602,4.777l-5.923,7.876c-3.974,5.285-2.906,12.818,2.38,16.794l48.325,36.335 c0.544,0.409,0.856,0.866,0.856,1.255c0,0.39-0.313,0.848-0.856,1.258l-48.326,36.334c-5.284,3.975-6.352,11.508-2.379,16.792 l5.923,7.88c2.249,2.99,5.838,4.775,9.599,4.775c2.619,0,5.106-0.829,7.194-2.4l75.266-56.589 C141.179,190.77,142.727,187.836,142.726,184.751z M133.37,186.009l-75.264,56.588c-0.763,0.573-1.556,0.693-2.087,0.693 c-1.121,0-2.145-0.505-2.805-1.383l-5.923-7.879c-1.156-1.539-0.846-3.733,0.693-4.892l48.326-36.334 c2.7-2.031,4.248-4.967,4.248-8.052c-0.001-3.086-1.55-6.019-4.249-8.048l-48.324-36.334c-1.54-1.158-1.852-3.354-0.694-4.893 l5.922-7.875c0.663-0.882,1.686-1.387,2.809-1.387c0.53,0,1.322,0.12,2.084,0.691l75.263,56.59 c0.544,0.409,0.856,0.867,0.856,1.256C134.226,185.142,133.913,185.601,133.37,186.009z">
                                        </path>
                                        <path
                                            d="M234.075,218.512h-89.207c-9.175,0-16.64,7.464-16.64,16.639c0,9.176,7.465,16.641,16.64,16.641h89.207 c9.175,0,16.64-7.465,16.64-16.641C250.715,225.976,243.25,218.512,234.075,218.512z M234.075,243.291h-89.207 c-4.488,0-8.14-3.652-8.14-8.141c0-4.487,3.651-8.139,8.14-8.139h89.207c4.488,0,8.14,3.651,8.14,8.139 C242.215,239.639,238.564,243.291,234.075,243.291z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">Custom Software Development
                    </h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Tailored software solutions designed to meet
                        your specific business needs.</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg viewBox="0 -19.5 164 164" fill="#ffffff" class="w-8 h-8"
                                xmlns="http: //www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M19.2329 89.0831C17.3341 89.4211 15.7432 89.7559 14.1371 89.9817C7.06966 90.976 1.51901 86.5687 0.48068 79.5288C-1.0289 69.307 6.73229 58.1139 14.141 55.0389C16.6482 53.9986 19.5794 53.9795 23.0364 53.3665C32.2494 32.1615 49.7618 21.7934 73.5423 20.3488C73.8921 16.4462 74.238 12.5935 74.6022 8.54059C73.5751 8.11988 72.3431 7.95977 71.6796 7.26077C70.7134 6.24344 69.5996 4.84016 69.5957 3.59771C69.5918 2.53116 70.9221 0.709891 71.8974 0.535306C74.597 0.0535535 77.542 -0.276629 80.1608 0.325233C83.5048 1.0938 83.9852 3.75262 81.8548 6.48561C81.4171 6.9389 81.1341 7.51899 81.0462 8.14288C81.224 11.6156 81.5273 15.081 81.7616 18.179C88.0211 18.7375 94.0055 19.0381 99.9211 19.8421C119.273 22.472 132.088 33.3508 139.077 51.3896C139.194 51.6909 139.333 51.9849 139.478 52.2744C139.549 52.3747 139.633 52.4656 139.727 52.5448C142.943 52.5448 146.247 52.1103 149.393 52.6347C156.138 53.7583 161.178 57.4004 162.853 64.3477C164.528 71.2951 161.862 77.0616 156.759 81.6435C151.742 86.1493 145.621 87.389 138.993 86.5404C138.746 86.7453 138.532 86.987 138.359 87.2571C130.949 104.691 117.203 114.915 99.7662 120.658C84.6227 125.684 68.3154 126.026 52.9746 121.639C36.0424 116.958 23.8017 107.182 19.2329 89.0831ZM74.3653 116.033C77.9548 115.728 81.5686 115.59 85.1292 115.09C99.4118 113.083 112.05 107.628 121.744 96.6153C138.759 77.2881 134.524 42.1123 104.846 32.3558C93.8566 28.746 82.3857 26.5243 70.7233 27.2725C57.6687 28.1106 46.2832 33.0968 37.8617 43.4256C30.0513 53.0022 26.6062 64.3694 26.3233 76.5471C25.9125 94.2223 34.5276 106.232 51.1808 112.095C58.6448 114.649 66.4731 115.979 74.362 116.032L74.3653 116.033ZM20.0205 60.3756C19.7421 60.3376 19.4597 60.3412 19.1824 60.3861C12.7641 62.2757 6.45466 73.2929 8.09026 79.6823C8.58579 81.6199 9.81316 82.7712 11.7592 82.8092C13.8765 82.8512 16.0005 82.5894 17.5501 82.4949C18.4092 74.7881 19.2099 67.6156 20.0185 60.3742L20.0205 60.3756ZM141.736 77.21C145.278 77.15 148.678 75.8064 151.305 73.4289C154.874 70.1905 155.296 65.2817 152.224 62.4522C149.242 59.7061 145.667 58.9152 141.736 59.7146V77.21Z"
                                        fill="#ffffff"></path>
                                    <path
                                        d="M84.8075 82.0252C86.4018 82.3193 88.1725 82.2825 89.5331 83.0097C90.1516 83.3495 90.6946 83.8115 91.129 84.3676C91.5634 84.9238 91.8802 85.5624 92.06 86.2448C92.3344 88.1095 90.7172 89.0671 88.9411 89.2994C88.0814 89.4143 87.2076 89.3635 86.367 89.1498C84.8505 88.6937 83.2428 88.6309 81.6954 88.9674C80.148 89.304 78.7116 90.0287 77.5215 91.0734C76.1714 92.182 74.5896 93.0209 73.233 91.3781C72.0319 89.9236 72.5832 88.2348 73.7817 86.9346C75.1549 85.3673 76.8518 84.1166 78.7554 83.269C80.659 82.4214 82.7239 81.9971 84.8075 82.0252Z"
                                        fill="#ffffff"></path>
                                    <path
                                        d="M57.7186 52.5112C61.4295 52.6392 63.7503 55.2876 63.5495 59.1645C63.3893 62.2533 60.9084 64.7434 58.1203 64.6154C54.9698 64.4703 52.4724 61.3206 52.607 57.6582C52.7442 53.9453 54.2853 52.3924 57.7186 52.5112Z"
                                        fill="#ffffff"></path>
                                    <path
                                        d="M93.575 57.3327C93.5684 54.2361 94.7564 52.8328 97.4244 52.7856C100.873 52.7245 103.039 54.689 102.96 57.8066C102.891 60.4916 100.78 62.7678 98.3 62.8282C95.4672 62.8971 93.5822 60.7024 93.575 57.3327Z"
                                        fill="#ffffff"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">Al & Chatbot Development</h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Advanced Al-powered chatbots and
                        automation to enhance customer interactions.</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-20  h-20 bg-[#6f42c1] p-5 rounded-full flex justify-center items-center">
                        <div>
                            <svg fill="#ffffff" viewBox="0 0 24 24" class="w-8 h-8"
                                xmlns="http: //www.w3.org/2000/svg" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M8.95305171,17.9846747 C8.72737466,19.1334216 7.71488744,20 6.5,20 L4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,17.5 C4,16.2851126 4.86657841,15.2726253 6.0153253,15.0469483 L6.02714614,14.7041437 C6.04713299,14.1245251 6.10682628,13.555636 6.20352226,13 L2.5,13 C2.1462677,13 1.90438878,12.6427369 2.03576165,12.3143047 L4.03576165,7.31430466 C4.11169333,7.12447547 4.29554771,7 4.5,7 L9,7 C9.02538451,7 9.05032719,7.00189166 9.07469478,7.0055417 C11.4290981,4.32146349 14.9247139,2.67696313 18.771296,2.80960389 C19.3819666,2.8306615 19.9902263,2.89709634 20.5910446,3.008359 C20.7946429,3.04606238 20.9539376,3.20535713 20.991641,3.40895537 C21.812186,7.83989855 20.1522623,12.1558183 16.9947249,14.9271075 C16.9982004,14.9509022 17,14.9752409 17,15 L17,19.5 C17,19.7044523 16.8755245,19.8883067 16.6856953,19.9642383 L11.6856953,21.9642383 C11.3572631,22.0956112 11,21.8537323 11,21.5 L11,17.7949378 C10.4368132,17.8936903 9.86739064,17.9531458 9.29585627,17.9728539 L8.95305171,17.9846747 Z M7.98749247,17.6945992 L6.30540075,16.0125075 C5.56890748,16.1079151 5,16.7375198 5,17.5 L5,19 L6.5,19 C7.26248018,19 7.8920849,18.4310925 7.98749247,17.6945992 L7.98749247,17.6945992 Z M12,17.5770127 L12,20.7614835 L16,19.1614835 L16,15.7132231 C14.8178863,16.5520811 13.4713529,17.1925443 12,17.5770127 L12,17.5770127 Z M6.42079004,12 C6.80202391,10.5414825 7.44257093,9.19144113 8.28872675,8 L4.83851648,8 L3.23851648,12 L6.42079004,12 L6.42079004,12 Z M8.69991595,16.9928092 L9.26139399,16.9734479 C9.82252402,16.9540985 10.3814387,16.8930532 10.9335157,16.7908167 C16.9701904,15.672914 20.9957193,9.95997934 20.0664857,3.93363717 C19.626205,3.86599452 19.1822172,3.82436794 18.7368337,3.80900989 C12.4850041,3.59342956 7.24213247,8.48677642 7.02655214,14.738606 L7.00719083,15.300084 L8.69991595,16.9928092 Z M14,13 C12.3431458,13 11,11.6568542 11,10 C11,8.34314575 12.3431458,7 14,7 C15.6568542,7 17,8.34314575 17,10 C17,11.6568542 15.6568542,13 14,13 Z M14,12 C15.1045695,12 16,11.1045695 16,10 C16,8.8954305 15.1045695,8 14,8 C12.8954305,8 12,8.8954305 12,10 C12,11.1045695 12.8954305,12 14,12 Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-white font-bold text-xl font-raleway text-center mt-3">Deployment & Launch Services
                    </h2>
                    <p class="text-center text-[#888888] text-sm mt-2">Hassle-free deployment, ensuring your
                        product goes live smoothly and efficiently.</p>
                </div>
            </div>
        </div>
    <div class="sm:w-[70%] w-full mx-auto pt-20 px-4">
    <p class="font-dancing text-4xl text-center text-white">Get in Touch</p>
    <div class="flex justify-center items-center sm:w-[60%] w-full mx-auto mt-5">
      <div class="border-2 border-[#a98eda] w-[25%] rounded-l-[50%]"></div>
      <div class="text-[#a98eda] text-sm p-3 border-dashed border-[#a98eda] border-[1px] font-bold">
        <p>Contact</p>
      </div>
      <div class="border-2 border-[#a98eda] w-[25%] rounded-r-[50%]"></div>
    </div>

    <p class="text-sm text-center font-semibold text-[#888888] mx-auto mt-2">
      Feel free to drop us a line to contact us
    </p>
    <div class="w-full py-10 flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0">
      <div class="w-full lg:w-[50%]">
        <p class="text-center text-2xl text-white font-white">Feel Free To Contact Us</p>

        <div class="mt-10 flex items-center justify-start gap-3">
          <div class="flex items-center justify-center bg-[#6f42c1] w-10 h-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="#ffffff"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                    </path>
                                </svg>
          </div>
          <span class="text-white font-raleway text-[18px]">+923441260302</span>
        </div>
        <div class="mt-6 flex items-center justify-start gap-3">
          <div class="flex items-center justify-center bg-[#6f42c1] w-10 h-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 " fill="#ffffff"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z">
                                    </path>
                                </svg>
          </div>
          <span class="text-white font-raleway text-[18px] break-all">samiurrehman.dev@gmail.com</span>
        </div>
        <div class="mt-6 flex items-center justify-start gap-3">
          <div class="flex items-center justify-center bg-[#6f42c1] w-10 h-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="#ffffff"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z">
                                    </path>
                                </svg>
          </div>
          <span class="text-white font-raleway text-[18px]">Sami ur rehman</span>
        </div>
      </div>
      <div class="w-full lg:w-[50%]">
        <form class="w-full mt-5 space-y-8">
          <input type="text" name="name" placeholder="Name"
            class="w-full px-3 py-2 border ring-[#6f42c1] ring-1 rounded-xl text-white bg-transparent focus:ring-2" />
          <input type="email" name="email" placeholder="Email"
            class="w-full px-3 py-2 border ring-[#6f42c1] ring-1 rounded-xl text-white bg-transparent focus:ring-2" />
          <textarea name="message" placeholder="Message"
            class="w-full px-3 py-2 h-[230px] border ring-1 ring-[#6f42c1] rounded-xl text-white bg-transparent focus:ring-2"></textarea>
          <button type="submit"
            class="w-12 h-12 flex items-center justify-center bg-[#a98eda] hover:bg-[#6f42c1] rounded-md transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" class="w-4" viewBox="0 0 512 512">
                                <path
                                    d="M498.1 5.629C492.7 1.891 486.4 0 480 0c-5.461 0-10.94 1.399-15.88 4.223l-448 255.1C5.531 266.3-.6875 277.8 .0625 289.1s8.375 22.86 19.62 27.55l103.2 43.01l61.85 146.5c.793 1.881 2.155 3.488 4.097 4.314C189.9 511.8 190.9 512 191.1 512c2.031 0 4.024-.7715 5.555-2.24l85.75-82.4l120.4 50.16c3.969 1.656 8.1 2.472 12.29 2.472c5.406 0 10.84-1.378 15.68-4.097c8.594-4.828 14.47-13.31 15.97-23.05l64-415.1C513.5 24.72 508.3 12.58 498.1 5.629zM16.03 289C15.65 282.9 18.73 277.2 24.06 274.1l448-256c.834-.4766 1.838-.4102 2.736-.7285L124.8 344l-99-41.25C20.25 300.4 16.4 295 16.03 289zM411.5 98.33l-225.7 280.7C184.6 380.4 184 382.2 184 384v80.38l-46.45-110.3L411.5 98.33zM200 485.2v-92.55l67.19 27.99L200 485.2zM431.8 450.4c-.7559 4.902-3.668 9.105-7.988 11.53C421.4 463.3 418.7 464 416 464c-2.117 0-4.188-.416-6.158-1.238l-202.9-84.55l285.6-355.1c2.357 3.338 3.885 7.193 3.244 11.34L431.8 450.4z">
                                </path>
                            </svg>
          </button>
        </form>
      </div>

    </div>
  </div>
    </div>
    </div>
  )
}

export default Home