import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Reserved | Developed by Shamim Hosen</p>
      </footer>
    </>
  )
}

export default Footer
