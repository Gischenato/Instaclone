import React from 'react'

import comments from '../../assets/icons/Comments.svg'
import heart from '../../assets/icons/Heart.svg'
import flag from '../../assets/icons/Flag.svg'
import share from '../../assets/icons/Message.svg'

import colors from '../../assets/styles/colors'
import styled from 'styled-components'

import Profile from './Profile'
import useProgressiveImg from '../../hooks/useProgressiveImg'

interface PostProps {
  user: string,
  image: string,
}

export default function Post({user, image}: PostProps) {
  const {src, blur} = useProgressiveImg(`${image}/500/500`, `${image}/3840`)
  
  return (
    <Div blur={blur}>
      <div className='post-profile'>
        <Profile src={`https://picsum.photos/seed/${user}/25/1080`} userName={user} type='POST'/>
        <span className='post-options'>...</span>
      </div>
      <div className='post-content'>
        <img className='post-image' src={src}  alt=""/>
      </div>
      <div className='post-interaction'>
        <img onClick={() => {console.log('Like')} } src={heart} alt="" />
        <img onClick={() => {console.log('Comments')} } src={comments} alt="" />
        <img onClick={() => {console.log('Share')} } src={share} alt="" />
        <img onClick={() => {console.log('Save')} } src={flag} alt="" />
      </div>
    </Div>
  )
}

const Div = styled.div<{ blur: boolean }>`
  /* transition: 1s; */
  display: flex;
  flex-direction: column;
  min-height: 10%;
  align-items: center;
  justify-content: center;
  width: 30%;

  border-color: ${colors.sidebar_border};
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  background-color: ${colors.post_bg};

  .post-profile {
    display: flex;
    margin: 10px 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .post-options {
    :hover {
      cursor: pointer;
    }
    margin-right: 20px;
    font-size: 20px;
    align-self: center;
    padding: 5px;
  }
  .post-content {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    height: auto;
  }
  .post-image {
    width: 100%;
    filter: ${(props) => props.blur ? 'blur(5px)' : 'none'};
    transition: ${(props) => props.blur ? 'none' : 'filter 0.3s ease-out'};
  }

  .post-interaction {
    max-width: inherit;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 20px;
  }

  .post-interaction > img {
    :last-of-type {
        margin-left: auto;  
    }
    :hover {
      cursor: pointer;
    }
  }
`
