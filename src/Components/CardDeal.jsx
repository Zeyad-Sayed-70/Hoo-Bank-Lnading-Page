import React from 'react'
import styles from '../style'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col-reverse md:space-y-0 md:flex-row md:space-x-12 text-center md:text-start`}>
      <div className={`flex flex-col space-y-8 mt-12 md:mt-0`}>
        <h1 className={`text-white text-4xl sm:text-6xl font-semibold`}>Easily control your billing & invoicing</h1>
        <p className={`${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoush aliprottiror integer platea placerat.</p>
        <button className={`w-fit py-4 px-6 rounded-lg bg-gradient-to-tl from-cyan-500 to-white text-primary font-semibold mx-auto md:mx-0`}>Get Started</button>
      </div>

      <div>
        <img className={`w-full max-w-[610px] md:max-w-full`} src={card} alt="cardDeal" />
      </div>
    </div>
  )
}

export default CardDeal