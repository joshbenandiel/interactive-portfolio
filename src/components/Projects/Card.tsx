import { CardContainer, BlueMask, CardMask } from "./styled"
import { Button } from './Button'
import React, {useEffect, useRef, useState} from "react"

interface IProps {
  img: string,
  header: string,
  paragraph: string,
  number: string,
  move: string,
  id: number,
  link: string
}

export const Card: React.FC<IProps> = ({
  img,
  header,
  paragraph,
  number, 
  link,
  move, 
  id}) => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [render, setRender] = useState<boolean>(false)

  console.log(isVisible)
  const ref = useRef(null)
 
  useEffect(() => {
    setRender(prev => !prev)
    const observer = new IntersectionObserver(
      ([entries]) => {
        if(entries.isIntersecting){
          setIsVisible(true);
        }
      },{rootMargin: "-200px",}
    );
    observer.observe(ref.current)
  }, [render])


  const translate = {
    show: '0px',
    hide: '1000px'
  }

 

  return (
    <CardContainer key={id} move={move} ref={ref}>
      <BlueMask location={isVisible ? translate.hide : translate.show} className={'card-blue-mask'}>
          <div/>
      </BlueMask>
      <img src={img} alt='landing-page' loading="lazy"/>
      <CardMask>
        <div className='blue-mask-hover'>

        </div>
      </CardMask>
      <span className={`card-text-wrapper${parseInt(number) % 2 === 0 ? `-right`: ``}`}>
        <h1>{header}</h1>
        <h5>{paragraph}</h5>
        <Button link={link}/>
      </span>
      {/* <div className={`card-number-wrapper${parseInt(number) % 2 === 0 ? `-left`: ``}`}>
        <h1 data-text={number} className='card-number'>{number}</h1>
      </div> */}
    </CardContainer>
  )
}
