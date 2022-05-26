import { CardContainer, CardContainerRight, ContainerSection} from "./styled"
import landing from './images/landing.jpg'
import facebook from './images/facebookwork.png'
import netflix from './images/netflixwork.jpg'
import apple from './images/apple.jpeg'
import shops from './images/shops.jpg'
import { Link } from 'react-router-dom'


export const Works: React.FC<any> = ({setOpenWorks}) => {
  return (
    <ContainerSection>
      <CardContainer>
        <div className='picture-container'>
          <img src={landing} alt="landing" />
          <span>01</span>
        </div>
        <div className='picture-details'>
          <h1>Landing Page</h1>
          <h3>Personal Portfolio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span>Landing Page</span>
          <Link className='works-link' to='/landing-page'>
            <button onClick={() => setOpenWorks(false)}>Case Study</button>
          </Link>
        </div>
      </CardContainer>
      <CardContainerRight>
        <div className='picture-details'>
          <h1>Facebook UI</h1>
          <h3>Clone Facebook Home Page</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span>Facebook</span>
          <Link className='works-link' to='/facebook-clone'>
            <button onClick={() => setOpenWorks(false)}>Case Study</button>
          </Link>
        </div>
        <div className='picture-container'>
          <img src={facebook} alt="landing" />
          <span>02</span>
        </div>
      </CardContainerRight>
      <CardContainer>
        <div className='picture-container'>
          <img src={netflix} alt="landing" />
          <span>03</span>
        </div>
        <div className='picture-details'>
          <h1>Netflix</h1>
          <h3>Login/Register with API Calls</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span>Netflix</span>
          <Link className='works-link' to='/netflix'>
            <button onClick={() => setOpenWorks(false)}>Case Study</button>
          </Link>
        </div>
      </CardContainer>
      <CardContainerRight>
        <div className='picture-details'>
          <h1>Ecommerce</h1>
          <h3>Apple Store Shopping without API Calls</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span>Ecommerce</span>
          <Link className='works-link' to='/ecommerce'>
            <button onClick={() => setOpenWorks(false)}>Case Study</button>
          </Link>
        </div>
        <div className='picture-container'>
          <img src={apple} alt="landing" />
          <span>04</span>
        </div>
      </CardContainerRight>
      <CardContainer>
        <div className='picture-container'>
          <img src={shops} alt="landing" />
          <span>05</span>
        </div>
        <div className='picture-details'>
          <h1>Ecommerce 2</h1>
          <h3>Shopping Store with API Calls</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span>Ecommerce</span>
          <Link className='works-link' to='/ecommercev2'>
            <button onClick={() => setOpenWorks(false)}>Case Study</button>
          </Link>
        </div>
      </CardContainer>
    </ContainerSection>
  )
}

