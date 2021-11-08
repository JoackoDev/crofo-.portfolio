import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'

const Footer: NextPage = () => {
    const FooterStyled = styled.div`
        .container {
            background-color: #7510F7;
            margin-bottom: -50px;
        }

        .titleH4 {
            color: white;
            text-align: center;
            font-size: 30px;
            padding-top: 100px;
        }

        .divContenedor {
            display: flex;
            flex: row;
            justify-content: space-evenly;
        }

        .imagen_font {
            color: white;
            font-size: 40px;
        }

        .imagen_font: hover {
            color: #000;
        }

        .footer-text {
            color: #fff;
            text-align: center;
            margin-top: 60px;
            font-weigth: 700;
        }
    `
  
    return (
      <FooterStyled>
          <div className="container">
            <h4 className="titleH4">Viviendo, aprendiendo & mejorando al mismo tiempo.</h4>
            <div className="divContenedor">
                <div className="imagen_font">
                    <a href="https://twitter.com/crofo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
                <div className="imagen_font">
                    <a href="mailto:josefantikalop@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
                <div className="imagen_font">
                    <a href="https://discord.gg/ruWeybk3tk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a>
                </div>
            </div>
                <h3 className="footer-text">Web Hecha Por A.T Developing</h3>
          </div>
      </FooterStyled>
    )
  }
  
  export default Footer