import React from 'react'

import Item from '../../Components/Items';

import {Container} from './styles'

const data = [1,2,3,4,5,6,7,8,9]

function Home() {
  return (
    <Container>
      {data.map((item, index) => (
          <Item key={index}/>
      ))}
    </Container>
  )
}

export default Home;
