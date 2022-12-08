import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'

import colors from '../../assets/styles/colors'
import Post from './Post'
import Stories from './Stories'

import users from '../../assets/mocks/users'
import { IPost, getAllPosts } from '../../services/api'

export default () => {

  const [posts, setPosts] = useState<Array<IPost>>([])

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try{
      const response = await getAllPosts()
      if (response.status != 200) throw new Error('Bad request')
      setPosts(oldPosts => response.data)
    }
    catch(error) {
      console.log(error);
    }
  }

  return (  
    <Container>
      <Sidebar/>
      <main>
        <Stories users={users}/>
        {posts.map(({author_username, media}, index) => {
          if (index > 1) return null
          return (
            <Post user={author_username} image={media} key={index}/>
          )
        })}
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 100vw;

  > main {
    padding: 20px 0;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`
