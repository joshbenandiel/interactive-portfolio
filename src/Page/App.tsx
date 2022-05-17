import { useEffect, useState } from "react";
import { Container, PreLoader } from "./styled"
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";



const themeProvider = {
  dark: '#1C1D25',
  light: '#EBEBEB'
}



const App: React.FC<any> = () => {

  const [loading, setLoading] = useState<boolean>(false)

  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
    
  },[])

  return (
    <>
    {loading ? (
      <PreLoader>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </PreLoader>
    )
    : (
    <Container>
      <Navbar/>
      <Main/>
    </Container>
    )}
    </>
  );
}

export default App;
