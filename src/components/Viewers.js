import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="img" />
        <video
          src="/videos/1564674844-disney.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="img1" />
        <video
          src="/videos/1564676714-pixar.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="img2" />
        <video
          src="/videos/1564676115-marvel.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="img3" />
        <video
          src="/videos/1608229455-star-wars.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="img4" />
        <video
          src="/videos/1564676296-national-geographic.mp4"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  -webkit-grid-gap: 25px;
  gap: 25px;
  -webkit-gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    z-index: -1;
    opacity: 0;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);
    -webkit-box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
