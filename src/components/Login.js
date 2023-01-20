import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import {
  selectUserName,
  setSignOutState,
  setUserLoginDetails,
} from "../features/USER/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
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
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="logo-One" />
          <SignUp onClick={signInWithGoogle}>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an Additional fee
            with the Disney + Subscriptions.As of 1/15/2023.The price of Disney+
            and Disney Bundle will be increase by 1$.
          </Description>
          <CTALogoTwo
            src="/images/cta-logo-two.png"
            alt="logo-Two"
          ></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #fff;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
