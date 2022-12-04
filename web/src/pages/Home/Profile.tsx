import React from 'react'
import colors from '../../assets/styles/colors'
import styled from 'styled-components'

interface ProfileProps {
  src: string,
  userName: string,
  type?: 'POST' | 'STORY'
}

export default function Profile({ src, userName, type = 'STORY' }: ProfileProps) {

  return (
    <Div type={type} onClick={() => {console.log(userName)}}>
      <img className='profileImg' src={src} alt=""/>
      <span className='profile-name'>{userName}</span>
    </Div>
  )
}
const Div = styled.div<{ type: 'POST' | 'STORY' }>`
  :hover {
    cursor: pointer;
  }

  display: flex;

  flex-direction: ${(props) => props.type === 'POST' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  padding: 0px 10px;

  .profileImg {
    width: ${(props) => props.type === 'POST' ? '30px' : '60px'};
    height: ${(props) => props.type === 'POST' ? '30px' : '60px'};
    border-radius: 50%;
    padding: ${(props) => props.type === 'POST' ? '1px' : '2px'};
    background-image: linear-gradient(${colors.profile_gradient});
  }

  .profile-name {
    margin-left: ${(props) => props.type === 'POST' ? '0.5rem' : '0'};
    margin-top: ${(props) => props.type === 'STORY' ? '0.25rem' : '0'};
    font-weight: 300;
    font-family: 'Signika Negative', sans-serif;
    font-size: 12px;
    color: ${colors.text};
  }
  `