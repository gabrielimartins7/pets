import styled from 'styled-components';

export const Img = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`


export const Card = styled.div`
  /* background-color: blue; */
  width: 95%;
  margin: 10px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const ContainerImg = styled.div`
 width: 70%; 
 position: relative;
 display:flex;
 justify-content:center;
 justify-items:center;

`

export const ContainerDescription = styled.div`
 width: 70%; 
 padding: 10px;
 

`

export const Time = styled.p`
  color: #7A83A0;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const TitleItem = styled.h1`
 color: #333;
`

export const Description = styled.p`
 color: #7A83A0;
 font-size: 20px;
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

export const NumberLikes = styled.p`
 color: #7A83A0;
 font-size: 14px;
`
