import React, { useState, useEffect } from "react";
import styled from "styled-components";
import movieData from "../movieData";
import { useParams } from "react-router-dom";

function Detail() {
  const [detailData, setDetailData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setDetailData(movieData[id - 1]);
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt="" />
      </Background>
      <Imgtitle>
        <img src={detailData.titleImg} alt="" />
      </Imgtitle>
      <Controls>
        <PlayBtn>
          <img src="../images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="../images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="../images/group-icon.png" alt="" />
        </GroupWatchBtn>
      </Controls>
      <Subtitle>
        {detailData.subTitle}
      </Subtitle>
      <Description>
        {detailData.description}
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Imgtitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 60px 0 20px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 56px;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  border: none;
  border-radius: 4px;
  background: rgb(249, 249, 249);
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198)
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249, 249, 249);
`;
const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  background: rgba(0,0,0,0.6);
  border: 1px solid rgb(249,249,249);
  color: rgb(249, 249, 249);
  cursor: pointer;

  span{
    font-size:30px;
  }

  &:hover{
    background: rgb(198, 198, 198)
  }
`;
const GroupWatchBtn = styled(AddBtn)``;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin: 26px 0;
`;
const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  line-height: 1.4;
  max-width: 760px;
`;
