import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Card, Img, Time, TitleItem, Description, ContainerLike, NumberLikes } from './styles'

export default function Items() {
  const [like, setLike] = React.useState(false);
  const [quantityLike, setQuantityLike] = React.useState(15);

  const handleLike = (like) => {
    setLike(like)
    if(like){
      setQuantityLike(quantityLike + 1);
    }else{
      setQuantityLike(quantityLike - 1);
    }
  }

  return (
    <Card>
      <Img />
      <ContainerLike onClick={() => handleLike(!like)}>
        {like ? (
          <AiFillHeart color="red"  />
        ):(
          <AiOutlineHeart color="red" />
        )}
        <NumberLikes>{quantityLike}</NumberLikes>
      </ContainerLike>
      <Time>Março 23, 2021</Time>
      <TitleItem>Lorem Ipsum is simply dummy text of the printing and typesetting industry {'<3'} </TitleItem>
      <Description> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry </Description>
    </Card>

  )
}
