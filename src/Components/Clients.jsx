import React from 'react'
import { clients } from '../Contstants'
import { airbnb, binance, coinbase, dropbox } from '../assets'
import styles from '../style'

const Clients = () => {
  return (
    <div id="clients" className={`${styles.paddingY} ${styles.flexCenter} space-y-20 md:space-y-0 space-x-0 md:space-x-20 flex-col sm:flex-row sm:flex-wrap md:flex-nowrap sm:items-end md-items-start`}>
      {clients.map((client, ind) => (
        <div key={client.id} className='flex justify-center relative sm:w-[50%] md:w-auto'>
          <img className="w-[200px] h-[40px] relative" src={client.logo} alt={`Client-${ind}`} />
          <div className="hover:bg-gradient-to-br from-gray-600 to-gray-900 absolute top-[-50%] right-[-10%] w-[120%] h-[100px]  blur-[60px]" />
        </div>
      ))}
    </div>
  )
}

export default Clients