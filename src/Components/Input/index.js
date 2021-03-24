import React from 'react'

import { Container, Input, Label } from './styles'

export default function InputComponent({ label, value, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} {...rest} />
    </Container>
  )
}
