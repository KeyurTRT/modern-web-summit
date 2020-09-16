import React, { useEffect, useState } from 'react'
import Typist from 'react-typist';
import { typistConfig } from '../../utility/config';

const Modern = (props) => {

  const [key, setKey] = useState(new Date().getTime())
  const [firstTime, setFirstTime] = useState(true)
  const [secondKey, setSecondKey] = useState(new Date().getTime())
  const [dataVisible, setVisible] = useState(false)
  const [typistVisible, setTypistVisible] = useState(false)
  const [typistVisible2, setTypistVisible2] = useState(false)
  const { isVisible } = props

  useEffect(() => {
    if (isVisible && firstTime) {
      setFirstTime(false)
      setTypistVisible(true)
      handleOnPageVisible()
    }
  })

  const handleOnPageVisible = () => {
    setTimeout(() => {
      setTypistVisible2(true)
    }, 1200);
    setKey(new Date().getTime())
    setSecondKey(new Date().getTime())
    setVisible(true)
  }

  return (
    <div className="" id="modern" >
      <div className="flex justify-center mb-2">
        <p className="text-white sm:text-base md:text-xl font-menlo mr-3  ">modern_web_summit$</p>
        {typistVisible && <Typist key={key} cursor={typistConfig} className="text-white sm:text-base md:text-xl font-menlo w-110 text-left">
          <Typist.Delay ms={200} />
          git pull
        </Typist>}
      </div>
      {dataVisible && <h5 className="text-lightGreen-200 sm:text-xl md:text-4xl font-menlo animated delay-75s fadeIn">WEB COMMUNITIES TOGETHER</h5>}
      <div className="flex justify-center mb-2 mt-10">
        {dataVisible && <p className="text-white sm:text-base md:text-xl font-menlo mr-3 animated delay-1s fadeIn ">modern_web_summit$  </p>}
        {typistVisible2 && <Typist key={secondKey} cursor={typistConfig} className="text-white sm:text-base md:text-xl font-menlo w-110 text-left">
          <Typist.Delay ms={1200} />
          git push
        </Typist>}
      </div>
      {dataVisible && <h5 className="text-lightGreen-200 sm:text-xl md:text-4xl font-menlo animated delay-2s fadeIn">THE BOUNDS OF POSSIBILITY</h5>}
    </div >
  )
}

export default Modern
