import { useEffect } from "react"
import { Project, VisitPage } from "./styled"
import AOS from 'aos'
import {BsArrowRight} from 'react-icons/bs'
import { WorkType } from "."

interface IProps {
  worksData: WorkType
}

export const MainProject: React.FC<IProps> = ({worksData}) => {

  useEffect(() => {
    AOS.init();
  },[])
  return (
    <Project color={worksData.colors[2].threeColor}>
      <div>
        <h2>Introduction</h2>
        <p data-aos="fade-up">{worksData.projectDesc}</p>
      </div>
      <span>{worksData.title}</span>
      <VisitPage>
        <button data-aos="fade-up" data-aos-delay="50">
          Visit Website
          <BsArrowRight className='project-right-arrow' size={30}/>
        </button>
      </VisitPage>
    </Project>
  )
}
