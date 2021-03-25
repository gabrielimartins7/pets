import styled from 'styled-components';



export const Img = styled.img`
  height: 180px;
  width: 350px;
  border-radius: 4px;
  background-size: auto;
  cursor: pointer;
`

export const Card = styled.div`
  /* background-color: blue; */
  width: 350px;
  min-height: 350px;
  max-height: 450px;
  margin: 10px;
  position: relative;
`

export const Time = styled.p`
  color: #7A83A0;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const TitleItem = styled.h3`
 color: #333;
`


export const Description = styled.p`
 color: #7A83A0;
 font-size: 14px;
`

export const ContainerLike = styled.div`
  position:absolute;
  top: 140px;
  left: 5px;
  height: 30px;
  width: 50px;
  background-color:#fff;
  border-radius: 4px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  cursor: pointer;
`

export const TagCategoria = styled.div`
  position:absolute;
  top: 0px;
  right: 0px;
  height: 30px;
  width: 80px;
  background-color:var(--yellow);
  border-radius: 2px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  cursor: pointer;
`

export const NumberLikes = styled.p`
 color: #7A83A0;
 font-size: 14px;
`
