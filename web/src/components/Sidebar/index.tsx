import React from 'react'
import Option from './Option'

import logo from '../../assets/icons/Logo.svg'
import compass from '../../assets/icons/Compass.svg'
import hamburger from '../../assets/icons/Hamburger.svg'
import heart from '../../assets/icons/Heart.svg'
import home from '../../assets/icons/Home.svg'
import search from '../../assets/icons/Search.svg'
import message from '../../assets/icons/Message.svg'
import create from '../../assets/icons/Create.svg'

import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export default () => {
  return (
    <Div>
      <img className='logo' src={logo} alt="instaclone logo"/>
      <ul className='options-list'>
        <li><Option Icon={home} title='Página inicial'/></li>
        <li><Option Icon={search} title='Pesquisa'/></li>
        <li><Option Icon={compass} title='Explorar'/></li>
        <li><Option Icon={message} title='Mensagens'/></li>
        <li><Option Icon={heart} title='Notificaçoes'/></li>
        <li><Option Icon={create} title='Criar'/></li>
        <li><Option Icon={hamburger} title='Mais'/></li>
      </ul>
    </Div>
  )
}

const Div = styled.div`
  position: fixed;
  background-color: ${colors.sidebar_bg};
  width: 16vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-color: ${colors.sidebar_border};
  padding: 1rem;

  .logo {
    width: 180px;
    max-width: 240px;
    height: auto;
  }
  .options-list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  .options-list > li {
    :last-of-type {
      margin-top: auto;
      margin-bottom: 20px;
    }
  }
`