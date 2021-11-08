import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import styled from '@emotion/styled'
import Sg from '../public/img/sg.png'
import Wyger from '../public/img/wyger.png'
import King from '../public/img/king.png'
import Ak from '../public/img/ak.png'
import Dr from '../public/img/dr.png'
import Image from 'next/image'

const CarouselDS: NextPage = () => {
  const CarouselStyled = styled.div`
    margin: 0px auto;
    width: 100%;
    margin-top: 50px;
    background-color: var(--violeta);
    padding: 20px;
    .swiper1 {
      display: none;
    }
    .contentCarousel {
      background: white;
      width: 80%;
      margin: 0px auto;
      padding: 20px;
      border-radius: 20px;
      margin-top: 45px;
      .iframeDiv {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      .swiper-button-next {
        color: var(--violeta);
        transition: 300ms all;
      }
      .swiper-button-next:hover {
        text-shadow: 0px 0px 4px var(--violeta);
      }
      .swiper-button-prev {
        color: var(--violeta);
        transition: 300ms all;
      }
      .swiper-button-prev:hover {
        text-shadow: 0px 0px 4px var(--violeta);
      }
      .divTitle {
        text-align: center;
        color: #000;
        font-size: 20px;
      }
    }

    .imagen-logo {
      width: 70px;
    }
    
    @media (max-width: 1136px) {
      .swiper1 {
        display: block;
      }
      .swiper3 {
        display: none;
      }
    }

    @media (max-width: 470px) {
      .divTitle h1 {
        font-size: 23px;
      }
      .contentCarousel {
        width: 95%;
      }
    }
  `

  return (
    <CarouselStyled id="servidores">
      <div className="contentCarousel">  
      <div className="divTitle">
        <h1>Servidores en los que trabajo</h1>
      </div>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, A11y]}
        navigation
        draggable={false}
        slidesPerView={3}
        className='swiper3'
      >
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>🍉 | SG Community.</h3>
            <div className="imagen-logo">
              <Image src={Sg} alt='Menú imagen' />
            </div>
            <p>Miembros: 61K</p>
            <iframe src="https://discord.com/widget?id=411615677678616607&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#StayWyger</h3>
            <div className="imagen-logo">
              <Image src={Wyger} alt='Menú imagen' />
            </div>
            <p>Miembros: 149</p>
            <iframe src="https://discord.com/widget?id=805854905591922718&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>King Discord</h3>
            <div className="imagen-logo">
              <Image src={King} alt='Menú imagen' />
            </div>
            <p>Miembros: 24K</p>
            <iframe src="https://discord.com/widget?id=870993545459277825&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#BeAKnight</h3>
            <div className="imagen-logo">
              <Image src={Ak} alt='Menú imagen' />
            </div>
            <p>Miembros: 878</p>
            <iframe src="https://discord.com/widget?id=543134025464676353&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Dr Igo Discord</h3>
            <div className="imagen-logo">
              <Image src={Dr} alt='Menú imagen' />
            </div>
            <p>Miembros: 3K</p>
            <iframe src="https://discord.com/widget?id=338814044813131780&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Papitalandia</h3>
            <p>Miembros: 12K</p>
            <iframe src="https://discord.com/widget?id=331552260108713987&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, A11y]}
        navigation
        draggable={false}
        slidesPerView={1}
        className='swiper1'
      >
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>🍉 | SG Community.</h3>
            <p>Miembros: 61K</p>
            <iframe src="https://discord.com/widget?id=411615677678616607&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#StayWyger</h3>
            <p>Miembros: 149</p>
            <iframe src="https://discord.com/widget?id=805854905591922718&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>King Discord</h3>
            <p>Miembros: 24K</p>
            <iframe src="https://discord.com/widget?id=870993545459277825&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#BeAKnight</h3>
            <p>Miembros: 878</p>
            <iframe src="https://discord.com/widget?id=543134025464676353&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Dr Igo Discord</h3>
            <p>Miembros: 3K</p>
            <iframe src="https://discord.com/widget?id=338814044813131780&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Papitalandia</h3>
            <p>Miembros: 12K</p>
            <iframe src="https://discord.com/widget?id=331552260108713987&theme=dark" width="250" height="350" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </CarouselStyled>
  )
}

export default CarouselDS