import React from 'react'
import { arrowUp, robot } from '../assets';
import styles from '../style'
const Hero = () => {
  return (
    <div id="home" className={`flex justify-between items-center flex-col md:flex-row mt-10 font-poppins space-y-12`}>
      <div className=' w-full max-w-[600px] md:w-[50%] md:min-w-[490px] lg:min-w-[580px] text-center md:text-start relative'>
        <div className='p-2 w-fit rounded uppercase bg-gray-900 text-[10px] md:text-xs mx-auto md:mx-0'>
          <span className='p-2 text-secondary rounded'>%</span>
          <span className='text-gray-400'><b className='text-gray-200'>20%</b> discount for 1 <b className='text-gray-200'>month</b> account</span>
        </div>

        <div className='my-4 capitalize text-white text-4xl sm:text-6xl lg:text-7xl font-bold relative'>
          <h1 className='m-0 mb-3'>
            The Next <br/>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white'>Generation</span> <br/>
            Payment Method
          </h1>

          <div className={`hidden md:flex text-sm w-[70px] h-[70px] md:w-[90px] md:h-[90px] ${styles.flexCenter} flex-col leading-none rounded-full border-2 border-secondary p-6 text-xs text-secondary font-normal absolute top-0 sm:left-[65%] cursor-pointer`}>
            <span className='-mb-3'>Got <img className='inline w-[15px] h-[15px]' src={arrowUp} alt="arrow" /></span>
            <br/>Started</div>

          </div>
        
          <div className='mt-6'>
            <p className={`mx-auto md:m-0 w-[340px] sm:w-[480px] text-[15px] sm:test-[18px] sm:max-w-[480px] ${styles.paragraph} `}>Our team exprerts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
          </div>

          <div className="absolute z-[0] w-[30%] h-[95%] top-[30px] left-[-100px] bg-gradient-to-t from-indigo-200 to-white blur-[190px]" />
      </div>

      <div className={`flex justify-center md:justify-end w-full md:w-[50%] relative`}>
        <img className='w-full max-w-[540px] sm:translate-x-[62px] lg:translate-x-[0px] py-12 sm:py-0 z-[5]' src={robot} alt="robot" />
      
        {/* gradient start */}
        <div className="absolute z-[0] w-[30%] h-[35%] top-0 right-[9rem] bg-gradient-to-t from-indigo-200 to-pink-200 blur-[200px]" />
        <div className="absolute z-[0] w-[40%] h-[50%] right-[9rem] bottom-[10rem] bg-gradient-to-b from-pink-200 to-sky-300 blur-[155px]" />
        {/* gradient end */}
      </div>
    </div>
  )
}

export default Hero