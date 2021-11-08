import type { NextPage } from "next";
import styled from "@emotion/styled";
import logo1 from "../public/img/logito.png";
import logo2 from "../public/img/logito2.png";
import logo3 from "../public/img/logito3.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const About: NextPage = () => {
  const AboutStyled = styled.div`
    .divAbout {
      background-color: #7510f7;
      width: 100%;
    }

    .titleH3 {
      color: #fff;
      text-align: center;
      padding-top: 130px;
      font-size: 30px;
    }

    .subP {
      text-align: center;
      margin-top: 40px;
      font-size: 26px;
      color: white;
      margin-bottom: 200px;
      margin-right: 50px;
    }

    .container-skills {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin-top: 60px;
      background-color: white;
      border-radius: 50px 50px 0px 0px;
      padding-top: 100px;
      height: auto;
      div {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding: 20px;
        margin-top: 10px;
      }
    }

    .icon {
      color: #000;
      font-size: 45px;
    }

    .icon2 {
      width: 170px;
    }

    .titleH2 {
      color: #000;
    }

    .paragraph {
      font-size: 18px;
      margin-top: 20px;
      word-spacing: 0px;
      line-height: 30px;
      width: 350px;
      color: #000;
    }

    .sectionP {
      font-size: 20px;
      font-weight: 700;
    }

    .sectionLanguages {
      font-size: 17px;
      color: #000;
    }

    .sectionH {
      font-size: 20px;
      font-weight: 700;
    }

    .sectionList {
      color: #000;
    }
    @media (max-width: 422px) {
      .container-skills div {
        width: 95%;
      }
      .container-skills div * {
        width: 100%;
      }
    }
  `;

  return (
    <AboutStyled>
      <div className="divAbout" id="sobre-mi">
        <h3 className="titleH3">Hola, soy Crofo. Un placer conocerte.</h3>
        <p className="subP">
          Actualmente vivo en Argentina, estoy en el ecosistema de esports de
          2013 y la configuracion de servidores para discord de 2017. Desde
          julio de 2021 formo parte del programa de moderadores certificados
          dentro de discord y me dedico a administrar redes y contenido de
          esports para organizaciones.
        </p>
        <div className="container-skills">
          <div>
            {/* <FontAwesomeIcon className="icon" icon={faDiscord}/> */}
            <div className="icon2">
              <Image src={logo1} alt="Menú imagen" />
            </div>
            <h2 className="titleH2">Discord & Events Manager</h2>
            <p className="paragraph"></p>
            <p className="sectionP">Periodo dentro de la organizacion:</p>
            <p className="sectionLanguages">06/20 - 01/21</p>
            <p className="sectionH">Actividades realizadas:</p>
            <ul className="sectionList">
              <li>Viewing Party - 1500 Usuarios</li>
              <li>Torneos Comunitarios - 500 Participantes</li>
              <li>Reportes Mensuales De Metricas</li>
              <li>Streamer Manager</li>
              <li>Discord Manager</li>
            </ul>
          </div>
          <div>
            {/* <FontAwesomeIcon className="icon" icon={faDiscord}/> */}
            <div className="icon2">
              <Image src={logo2} alt="Menú imagen" />
            </div>
            <h2 className="titleH2">Community Manager</h2>
            <p className="paragraph"></p>
            <p className="sectionP">Periodo dentro de la organizacion:</p>
            <p className="sectionLanguages">11/20 - 05/21</p>
            <p className="sectionH">Actividades Realizadas:</p>
            <ul className="sectionList">
              <li>Administracion de Redes</li>
              <li>Organizacion de Eventos - TT 1 Argentina</li>
              <li>Discord Manager</li>
            </ul>
          </div>
          <div>
            {/* <FontAwesomeIcon className="icon" icon={faDiscord}/> */}
            <div className="icon2">
              <Image src={logo3} alt="Menú imagen" />
            </div>
            <h2 className="titleH2">Social Media Manager</h2>
            <p className="paragraph"></p>
            <p className="sectionP">Periodo dentro de la organizacion:</p>
            <p className="sectionLanguages">05/21 - Actualmente</p>
            <p className="sectionH">Actividades Realizadas:</p>
            <ul className="sectionList">
              <li>Administracion de Redes</li>
              <li>Planificacion de Estrategias</li>
              <li>Produccion Audiovisual</li>
            </ul>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
