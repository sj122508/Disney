import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <div>
        <Container>
            <Background >
                <img src='/images/details-bg.jpg' />
            </Background>
            <ImageTitle>
                <img src='/images/blackwidow-logo.png' />
            </ImageTitle>
            <Controls>
                <PlayButton >
                    <img src='/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton >
                    <img src='/images/play-icon-white.png'/>
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton >
                    <span>+</span>
                </AddButton>

                <GroupWatchButton >
                    <img src='/images/group-icon.png'/>
                </GroupWatchButton>
            </Controls>
        </Container>
    </div>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        height: 100%;
        width: 100%
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-left: 43px;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 50px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing:1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: white;
    text-transform: uppercase;

`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }

    &:hover {
        background: rgb(108, 122, 137);
    }

`
const GroupWatchButton = styled(AddButton)`
    background: rgb(198, 198, 198);
`