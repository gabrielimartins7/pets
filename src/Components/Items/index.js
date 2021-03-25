import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Card, TagCategoria, Img, Time, TitleItem, Description, ContainerLike, NumberLikes } from './styles'
import { useHistory } from 'react-router-dom'

export default function Items({ item }) {
  const history = useHistory();
  const [like, setLike] = React.useState(false);
  const [quantityLike, setQuantityLike] = React.useState(item.likes);

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
      <Img src={item.photoPreview}  onClick={() => history.push(`/mais-detalhes/${item.id}`)} />
      
      <TagCategoria>{item?.categoria}</TagCategoria>

      <ContainerLike onClick={() => handleLike(!like)}>
        {like ? (
          <AiFillHeart color="red"  />
        ):(
          <AiOutlineHeart color="red" />
        )}
        <NumberLikes>{quantityLike}</NumberLikes>
      </ContainerLike>
      <div style={{cursor:'pointer'}} onClick={() => history.push(`/mais-detalhes/${item.id}`)}>
      <Time>{item?.dataCreated}</Time>
      <TitleItem> { item.title } </TitleItem>
      <Description>{item.littleDescription}</Description>
      </div>
      
    </Card>

  )
}
