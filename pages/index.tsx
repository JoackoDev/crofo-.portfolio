import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Carousel from './components/Carousel'
import Title from './components/Title'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

const Home: NextPage = () => {
  const HomeStyled = styled.div`
  `
  
  return (
    <HomeStyled>
      <Title/>
      <About/>
      <Carousel />
      <Contact />
      <Footer/>
    </HomeStyled>
  )
}

export default Home
