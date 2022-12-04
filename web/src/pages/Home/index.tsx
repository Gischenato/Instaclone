import React from 'react'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'

import colors from '../../assets/styles/colors'
import Post from './Post'
import Stories from './Stories'

import users from '../../assets/mocks/users'
import posts from '../../assets/mocks/posts'


export default () => {

  return (  
    <Container>
      <Sidebar/>
      <main className='main'>
        <Stories users={users}/>
        {posts.map(({user, image}, index) => <Post user={user} image={image} key={index}/>)}
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 100vw;

  .sidebar {
    width: 15vw;
    display: flex;
    border-right: 1px solid;
    border-color: ${colors.sidebar_border};
    padding: 1rem;
  }

  .main {
    padding: 20px 0;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.primary};
    /* justify-content: center; */
  }
`
