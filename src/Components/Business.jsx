import React from 'react'
import { features } from '../Contstants';
import styles from '../style';
import { star, shield, send } from '../assets';

const Business = () => {
  return (
    <div id="features" className={`${styles.flexStart} ${styles.paddingY} items-center justify-between flex-col md:flex-row space-y-12 md:space-x-12 font-poppins`}>
      <div className={`mx-auto md:mx-0 flex flex-col space-y-6 text-center md:text-start items-center md:items-start`}>
        <h1 className={`text-4xl sm:text-5xl font-bold text-white leading-1`}>You do the business<br/>we'll handle the money.</h1>
        <p className={`${styles.paragraph} text-[14px] text-gray-400 max-w-[320px] sm:max-w-[500px]`}>
          With the right credit. you can improve your financial life by build credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <button className={`w-fit py-4 px-6 rounded-lg bg-gradient-to-tl from-cyan-500 to-white text-primary font-semibold`}>Get Started</button>
      </div>

      <div className={`mx-auto md:mx-0 flex flex-col justify-center items-center space-y-4`}>
        {features.map((feat) => (
          <div className={`flex flex-col sm:flex-row text-center sm:text-start items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-6 p-4 rounded-[20px] hover:bg-gradient-to-br from-gray-600 to-gray-900`}>
            <img className=' bg-gray-900 rounded-full object-none w-[70px] h-[70px]' src={feat.icon} alt={feat.title} />
            <div>
              <h6 className={`text-white font-semibold text-lg`}>{feat.title}</h6>
              <p className={`${styles.paragraph} text-gray-500 mt-2 text-[14px] leading-[20px] max-w-[300px] sm:max-w-[400px]`}>{feat.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Business