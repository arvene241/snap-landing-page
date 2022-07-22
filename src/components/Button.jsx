import React from 'react'
import { ButtonStyle } from '../styles/components/ButtonStyle'

export default function Button({ content, type}) {
  return (
    <ButtonStyle className={type}>
      <a href="#">{content}</a>
    </ButtonStyle>
  )
}
