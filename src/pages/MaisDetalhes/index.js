import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Card, Img, Time, TitleItem, Description, ContainerLike,ContainerImg, NumberLikes, ContainerDescription } from './styles'

import DataJson from '../../data/data.json'

export default function MaisDetalhes() {
  const [item, setItem] = useState();
  const params = useParams();

  const [like, setLike] = React.useState(false);
  const [quantityLike, setQuantityLike] = React.useState(0);

  const handleLike = (like) => {
    setLike(like)
    if(like){
      setQuantityLike(quantityLike + 1);
    }else{
      setQuantityLike(quantityLike - 1);
    }
  }

  useEffect(() => { 
    const filter = DataJson.filter((item) => item.id == params.id);
    setItem(filter[0]);
    setQuantityLike(filter[0].likes);

    console.log(filter);
  },[params])

  
  return (
    <Card>
    <Card>
    <ContainerImg>
      <Img src={item?.photoPreview}  />
      <ContainerLike onClick={() => handleLike(!like)}>
        {like ? (
          <AiFillHeart color="red"  />
        ):(
          <AiOutlineHeart color="red" />
        )}
        <NumberLikes>{quantityLike}</NumberLikes>
      </ContainerLike>
    </ContainerImg>
    </Card>
  

      <ContainerDescription>
        <Time>{item?.dataCreated}</Time>
        <TitleItem> { item?.title } </TitleItem>
        <Description>{item?.descriptionFull}</Description>
      </ContainerDescription>
  
  
  </Card>
  )
}
