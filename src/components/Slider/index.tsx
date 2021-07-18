import React from 'react'
import SliderImg from '../../img/sliderImg.png'
import style from './style.module.css'
const Slider: React.FC = () => {
  return (
    <div className={style.slider}>
      <img src={SliderImg} alt='slider' />
    </div>
  )
}
export default Slider
