import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/USER/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const signInWithGoogle = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((err) => console.log(err));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>

      {!userName ? (
        <LogIn onClick={signInWithGoogle}>Login</LogIn>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="home-icon" />
              <span>Search</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="home-icon" />
              <span>Watchlist</span>
            </a>
            <a href="/original">
              <img src="/images/original-icon.svg" alt="home-icon" />
              <span>Original</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="home-icon" />
              <span>Movies</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="home-icon" />
              <span>Series</span>
            </a>
          </NavMenu>
          <SignOut onClick={signInWithGoogle}>
            <UserImg src={userPhoto} alt="profile-photo" />
            <DropDown>
              <span>SignOut</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08px;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0%;
        opacity: 0;
        height: 2px;
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:before {
        width: 90%;
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogIn = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-out;
  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 50%);
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  transition: all 0.3s ease;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;
export default Header;
