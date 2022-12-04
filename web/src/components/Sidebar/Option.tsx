import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'

interface OptionProps {
  title: string
  Icon: string
}

export default function Option({ title, Icon }: OptionProps) {
  return (
    <Div>
      <img src={Icon} alt={title + ' icon'}/>
      <h2>{title}</h2>
    </Div>
  )
}

const Div = styled.div`
  :hover {
    background-color: ${colors.sidebar_option_hover};
    cursor: pointer;
  }
  h2 {
    margin: 0;
    color: ${colors.text};
    font-weight: 300;
    font-size: 16px;
    font-family: 'Signika Negative', sans-serif;
  }
  display: flex;
  align-items: flex-end;
  text-align: end;
  gap: 1rem;
  background-color: ${colors.sidebar_bg};
  border-radius: 25px;
  padding: 12px 38px 12px 18px
`