import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...setting}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 170);
      margin-top: 10px;
    }
  }
  li.slick-active button:before {
    color: #fff;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);

  @media (max-width: 450px) {
    height: 200px;
  }

  a {
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 0.3s;
    }
  }
`;
export default ImgSlider;
