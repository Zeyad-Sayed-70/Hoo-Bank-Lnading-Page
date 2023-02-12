import React from 'react'
import styles from '../style'
import { quotes, people01, people02, people03 } from '../assets'
import { feedback } from '../Contstants'

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} relative`}>
      <div className={`${styles.flexCenter} flex-col md:flex-row md:space-x-[100px] text-center md:text-start`}>
        <h1 className={`text-white font-semibold text-4xl sm:text-6xl mb-8 md:mb-0`}>What people are saying about us</h1>
        <p className={`${styles.paragraph}`}>Everything you need to accept card payments aand grow your business anywhere on the planet.</p>
      </div>

      <div className={`flex justify-center items-center flex-col md:flex-row mt-20 space-y-6 md:space-y-0 lg:space-x-6`}>
        {feedback.map((person) => (
          <div key={person.id} className={`flex flex-col justify-between space-y-8 p-12 rounded-3xl flex-1 max-w-[500px] h-[400px] hover:bg-gradient-to-br from-gray-600 to-gray-900`}>
            <img className={`w-[40px]`} src={quotes} alt="quotes" />

            <p className={`text-white text-xl`}>{person.content}</p>

            <div className={`flex items-center space-x-6 md:space-x-0 lg:space-x-6 md:flex-col lg:flex-row md:space-y-6 md:text-center lg:space-y-0 lg:text-start`}>
              <img className={'w-[60px]'} src={person.img} alt={person.title} />
              <div>
                <h6 className={`text-white text-2xl`}>{person.name}</h6>
                <span className={`text-gray-600 text-xl`}>{person.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="absolute z-[0] w-[30%] right-[-60px] sm:w-[30%] h-[50%] top-[40%] sm:right-[-270px] bg-gradient-to-b from-blue-300 to-blue-400 blur-[250px]" />
    </div>
  )
}

export default Testimonials