import React from "react"
import Typewriter from "typewriter-effect"
import { home } from "../data/dummydata"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.passion}`,`${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right'>
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
