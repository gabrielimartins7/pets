import React from 'react'

import { Button, Container } from './styles'

export default function ButtonComponent({ title, ...rest }) {
  return (
    <Container>
      <Button {...rest}>
        {title}
      </Button>
    </Container>
  )
}
