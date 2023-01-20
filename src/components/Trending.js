import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selecttrending } from "../features/movie/movieSlice";

const Trending = () => {
  const movies = useSelector(selecttrending);
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, index) => (
            <Wrap key={index}>
              {movie.id}
              <Link to={"/Detail/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  -webkit-gap: 25px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: -9px 10px 12px 7px rgba(0, 0, 0, 0.63);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);
    -webkit-box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: 1px 30px 49px 7px rgba(0, 0, 0, 0.76);
  }
`;
export default Trending;
