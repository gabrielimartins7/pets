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
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const ContainerImg = styled.div`
 min-width: 300px;
 max-width: 700px; 
 position: relative;

`

export const ContainerDescription = styled.div`
 width: 300px; 
 padding: 10px;
 cursor: pointer;

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
