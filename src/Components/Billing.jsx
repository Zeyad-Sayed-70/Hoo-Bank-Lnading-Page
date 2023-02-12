import React from 'react'
import styles from '../style'
import { bill, google, apple } from '../assets'

const Billing = () => {
  return (
    <div id="product" className={`${styles.flexCenter} ${styles.paddingY} flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-12 text-center md:text-start`}>
      <div className="relative">
        <img className="w-full max-w-[610px] md:max-w-full" src={bill} alt="billing"/>
        <div className="absolute z-[0] w-[50%] left-[-60px] sm:w-[30%] h-[160%] top-[-180px] sm:left-[-270px] bg-gradient-to-b from-blue-300 to-pink-300 blur-[250px]" />
      </div>

      <div className={`flex flex-col space-y-8`}>
        <h1 className={`text-white text-4xl sm:text-6xl font-semibold`}>Easily control your billing & invoicing</h1>
        <p className={`${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoush aliprottiror integer platea placerat.</p>
        <div className={`flex justify-center md:justify-start space-x-6`}>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  )
}

export default Billing