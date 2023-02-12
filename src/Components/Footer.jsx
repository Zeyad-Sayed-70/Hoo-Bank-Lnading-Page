import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../Contstants'
import styles from '../style'

const Footer = () => {
  return (
    <div className={`pt-20`}>
      <div className={`${styles.flexStart} justify-between flex-col md:flex-row sm:space-x-12 space-y-12 md:space-y-0 text-center sm:text-start`}>
        <div className={`w-full md:w-auto flex flex-col items-center`}>
          <img src={logo} alt="hoobank" />
          <p className={`${styles.paragraph} mt-6`}>A new way to male the payments easy,<br/>reliable and secure</p>
        </div>

        <div className={`flex flex-1 justify-center md:space-x-[1rem] lg:space-x-[8rem] w-full md:w-auto flex-col sm:flex-row items-center sm:items-start`}>
        {footerLinks.map((col, ind) => (
          <div key={ind} className={`p-6`}>
            <h6 className={`mb-4 text-white text-lg`}>{col.title}</h6>
            <ul>
              {col.links.map((link, ind) => (
                <li key={ind} className="mb-2 text-md"><a className={`text-dimWhite`} href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>

      <hr className="opacity-[.3] my-4 sm:my-0"/>
      <div className={`${styles.flexCenter} justify-between flex-col sm:flex-row text-center sm:text-start`}>
        <span className={`text-dimWhite`}>Copyright @ 2021 HooBank. All Rights Reserved.</span>
        <div className={`${styles.flexCenter} p-6 space-x-6`}>
          {socialMedia.map(media => (
            <a key={media.id} href={media.link}>
              <img src={media.icon} alt={media.link}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer