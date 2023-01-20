import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Await, useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const colRef = doc(db, "movies", id);
    onSnapshot(colRef, (snapshot) => {
      if (snapshot.exists) {
        setDetail(snapshot.data());
      } else {
        console.log("Sorry We can,t Find Data");
      }
    });
  }, []);

  return (
    <Container>
      <Background>
        <img src={detail.backgroundImg} alt="" />
      </Background>
      <ImgTitle>
        <img src={detail.titleImg} alt="" />
      </ImgTitle>
      <ContentMata>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>PLAY</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detail.subTitle}</SubTitle>
        <Description>{detail.description}</Description>
      </ContentMata>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0;
  opacity: 0.9;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTitle = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 25vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-height: 200px;
    width: 30vw;
    object-fit: contain;
  }
`;
const ContentMata = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 24px 0;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: #000;

  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;

  div {
    height: 45px;
    width: 45px;
    background: #000;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.2em;
  font-size: 22px;
  padding: 16px 0;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;
