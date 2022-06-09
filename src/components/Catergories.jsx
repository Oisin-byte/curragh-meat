import React from 'react'
import styled from "styled-components";
import { catergories } from '../data';
import CatergoryItem from './CatergoryItem';

const Container  = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Catergories = () => {
  return (
      <Container>
          {catergories.map(item=>(
              <CatergoryItem item={item} />
          ))}
      </Container>
  )
}

export default Catergories