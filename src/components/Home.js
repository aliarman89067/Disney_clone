import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/USER/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newdisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
