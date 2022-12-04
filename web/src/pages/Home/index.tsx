import React from 'react'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'

import colors from '../../assets/styles/colors'

export default () => {
  return (  
    <Container>
      <Sidebar/>
      <main>
        <p>BANANA</p>
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .sidebar {
    width: 15vw;
    display: flex;
    border-right: 1px solid;
    border-color: ${colors.sidebar_border};
    padding: 1rem;
  }

  main {
    width: 100%;
    display: flex;
    background-color: ${colors.primary};
    justify-content: center;
  }
`
