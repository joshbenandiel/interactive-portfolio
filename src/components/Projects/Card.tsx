import { CardContainer } from "./styled"
import { Button } from './Button'
import React, { useEffect, useRef, useState } from "react"

interface IProps {
  img: string,
  header: string,
  paragraph: string,
  number: string,
  move: string,
  uniq: any
}

export const Card: React.FC<IProps> = ({img,header,paragraph,number, move, uniq}) => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [render, setRender] = useState<boolean>(false)

  const ref = useRef(null)
  const observer = new IntersectionObserver(
    ([entries]) => {
      if(entries.isIntersecting){
        setIsVisible(true);
      }
    },{rootMargin: "-200px",}
  );

  useEffect(() => {
    setRender(true)
    observer.observe(ref.current)
  },[])

 

  return (
    <CardContainer move={move} ref={ref} key={uniq}>
      <div className={`card-blue-mask${isVisible ? `-visible` : ``}`}/>
      <img src={img} alt='landing-page'/>
      <div className='card-mask'/>
      <span className={`card-text-wrapper${parseInt(number) % 2 == 0 ? `-right`: ``}`}>
        <h1>{header}</h1>
        <h5>{paragraph}</h5>
        <Button/>
      </span>
      <div className={`card-number-wrapper${parseInt(number) % 2 == 0 ? `-left`: ``}`}>
      <h1 data-text={number} className='card-number'>{number}</h1>
      </div>
    </CardContainer>
  )
}
