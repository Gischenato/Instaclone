import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'
import Profile from './Profile'

interface StoriesProps {
  users: {
    name: string,
    avatar: string
  }[]
}

export default function Stories({users}: StoriesProps) {
  return (
    <Header>
      {users.map((user, index) => <Profile src={user.avatar} userName={user.name} key={index}/>)}
    </Header>
  )
}

const Header = styled.header`
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  width: 30%;
  flex-direction: row;
  padding: 20px 0;
  border-color: ${colors.sidebar_border};
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  background-color: ${colors.post_bg};
`
