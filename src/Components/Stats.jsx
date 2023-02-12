import React from 'react'
import { stats } from '../Contstants';
import styles from '../style';

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12 py-12`}>
      {stats.map((stat, ind) => (
        <>
        <div key={stat.id} className={`${styles.flexCenter} space-x-3`}>
          <span className="text-white font-semibold text-3xl">{stat.value}</span>
          <h6 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">{stat.title}</h6>
        </div>
        {ind !== stats.length - 1 && <div className="text-dimWhite hidden sm:flex">〡</div>}
        {ind !== stats.length - 1 && <div className="text-dimWhite sm:hidden">━━</div>}
        </>
      ))}
    </div>
  )
}

export default Stats