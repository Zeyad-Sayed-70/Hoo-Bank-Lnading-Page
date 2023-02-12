import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <div className={`flex flex-col md:flex-row text-center md:text-start items-center justify-center space-x-0 md:space-x-[100px] py-20 px-10 md:px-20 rounded-3xl bg-gradient-to-bl from-gray-600 to-gray-900`}>
        <div>
          <h1 className={`text-white text-4xl sm:text-6xl font-semibold mb-6`}>Let's try our service now!</h1>
          <p className={`${styles.paragraph} max-w-[600px] mx-auto md:mx-0`}>Everything you need to accept card payments and grow your business anywhere the planet.</p>
        </div>
        <button className={`w-fit py-4 px-12 rounded-lg bg-gradient-to-tl from-cyan-500 to-white text-primary font-semibold mx-auto md:mt-0 mt-12 md:mx-0`}>Get Started</button>
      </div>
    </div>
  )
}

export default CTA