import React, {useEffect, useState} from 'react'

import Item from '../../Components/Items';
import ItemMain from '../../Components/ItemMain'

import {Container, ButtonFilterCategoria, GroupButtons} from './styles';

import DataJson from '../../data/data.json';

const categorias = ['All','Dog', 'Cat', 'Habbit', 'Roedor'];

function Home() {
  const [filtered, setFiltered] = useState(DataJson);
  const [indexFilter, setIndexFilter] = useState(0);

  useEffect(() => {
    filterData(indexFilter);
  },[])


  const filterData = (index) => {
    if(categorias[index] == "All"){
      setFiltered(DataJson);
    }else{
      const filter = DataJson.filter((item) => item.categoria == categorias[index]);
      setFiltered(filter);
    }
    setIndexFilter(index);
  }

  const handleFilter = (index) => {
    filterData(index);
    
  }

  return (
    <Container>

      
      <GroupButtons>
      <h3>Filtros: </h3>
        {categorias.map((categoria,index) => (
          <ButtonFilterCategoria key={index} style={{background: indexFilter == index ? '#764701' : '#fb1' }} onClick={() => handleFilter(index)}>{categoria}</ButtonFilterCategoria>
        ))}
      </GroupButtons>
     


      {filtered.map((item, index) => {
        if(index === 0){
          return(
          <ItemMain key={index} item={item}/>
          )
        }else{
          return(
            <Item key={index} item={item}/>
            )
        }
      })}
    </Container>
  )
}

export default Home;
