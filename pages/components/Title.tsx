import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import worker from '../public/img/worker.png'

const Title: NextPage = () => {
    const TitleStyled = styled.div`
        .title-sub {
            text-align: center;
            margin-top: 130px;
            margin-bottom: 100px;
            font-size: 30px;
        }

        .title-sub h2 {
            font-size: 20px;
        }

        .divImage {
            display: flex;
            justify-content: center;
            width: 300px;
            margin: 0 auto;
            margin-top: -60px;
            margin-bottom: 100px;
        }

        .img {
            border-radius: 50%;
            margin-top: 20px;
        }

        @media (max-width: 464px) {
          h1 {
            font-size: 30px;
          }
        }

        @media (max-width: 411px) {
          h1 {
            margin-top: 150px;
          }
        }
    `
  
    return (
      <TitleStyled>
          <div className="title-sub">
            <h1>Social Media Manager</h1>
            <h2>Administro, analizo y creo contenido dedicado a esports</h2>
            <h2>Configuracion y managment de comunidades en Discord</h2>
          </div>
          <div className="divImage">
            <Image className="img" src={worker} alt="worker"></Image>
          </div>
      </TitleStyled>
    )
  }
  
  export default Title