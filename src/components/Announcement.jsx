import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    transition: all 1.5s ease;
`

const Announcement = () => {
  return (
    <div>
        <Container>
            All orders must be completed 8 weeks in advanced and collected at our in person shop!
        </Container>
    </div>
  )
}

export default Announcement