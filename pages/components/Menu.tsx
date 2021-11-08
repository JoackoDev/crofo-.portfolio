import type { NextPage } from 'next'
import styled from '@emotion/styled'
import MenuImage from '../public/img/menu.png'
import Image from 'next/image'

const Menu: NextPage = () => {
  const MenuStyled = styled.div`
    .menuImage {
      width: 83px;
      position: absolute;
      top: 0px;
      left: 20px;
      z-index: 5;
      padding: 10px;
      cursor: pointer;
      transition: 300ms all;
    }

    .menuImage * {
      width: 100%;
      transition: 300ms all;
    }
    
    .linksMenu {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      position: absolute;
      top: 50px;
      z-index: 4;
      list-style: none;
      overflow: hidden;
      padding: 0px;
      padding-top: 25px;
      left: 19px;
      height: 40px;
      .linkMenu {
        width: 100%;
      }
      .linkMenu a {
        display: block;
        margin-top: 20px;
        text-align: center;
        padding: 5px;
        background: var(--violeta);
        color: white;
        border-radius: 20px;
        font-weight: bold;
      }
    }

    #linksMenu {
      transition: 300ms all;
    }

    .linksMenu.active {
      height: 260px;
    }
  `

  const deployMenu = () => {
    const linksMenu: HTMLElement|null = document.querySelector('#linksMenu')
    const menuImage: HTMLElement|null = document.querySelector('.menuImage')
    if (linksMenu && linksMenu.className === 'linksMenu') {
      linksMenu.className = 'linksMenu active'
      if (menuImage) menuImage.style.transform = 'rotateZ(90deg)'
    } else {
      if (linksMenu) linksMenu.className = 'linksMenu'
      if (menuImage) menuImage.style.transform = 'rotateZ(0deg)'
    }
  }

  return (
    <MenuStyled>
      <div className='menuImage' onClick={deployMenu}>
        <Image src={MenuImage} alt='Menú imagen' />
      </div>
      <ul className="linksMenu" id='linksMenu'>
        <li className='linkMenu'>
          <a href='#'>Inicio</a>
        </li>
        <li className='linkMenu'>
          <a href='#sobre-mi'>Sobre Mi</a>
        </li>
        <li className='linkMenu'>
          <a href='#servidores'>Servidores</a>
        </li>
        <li className='linkMenu'>
          <a href='#form'>Contacto</a>
        </li>
      </ul>
    </MenuStyled>
  )
}

export default Menu
