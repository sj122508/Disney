import React from 'react';
import styled from 'styled-components';

function Movies() {
  return  (
  <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
            <img src= '/images/movies_2.jpeg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_1.jpeg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_3.jpg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_4.jpg' />
        </Wrap>


        <Wrap>
            <img src= '/images/movies_5.jpg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_6.jpeg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_7.jpg' />
        </Wrap>

        <Wrap>
            <img src= '/images/movies_8.jpg' />
        </Wrap>
      </Content>
  </Container>
  )
}

export default Movies;

const Container = styled.div`
    padding
`

const Content = styled.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
    // overflow: hidden;
`

const Wrap = styled.div`
    height:250px;
    border-radius: 10px;
    // overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    // position: relative;

    img { 
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        // position: absolute;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
    }

`
