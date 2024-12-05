import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import img from "../Assets/atlassian.svg";

export const FooterComponent = () => {
  return (
    <Container>
      <Wrapper>
        <DropDown>
          English
          <RiArrowDropDownLine />
        </DropDown>
        <Navigation>
          <Nav>Templates</Nav>
          <Nav>Pricing</Nav>
          <Nav>Apps</Nav>
          <Nav>Jobs</Nav>
          <Nav>Blog</Nav>
          <Nav>Developers</Nav>
          <Nav>About</Nav>
          <Nav>Help</Nav>
          <Nav>Legal</Nav>
          <Nav>Cookies Settings</Nav>
          <Nav>Privacy</Nav>
        </Navigation>
        <Logo src={img} />
        <Copyright> © Copyright 2021. All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  );
};

const Logo = styled.img`
  object-fit: contain;
  width: 150px;
  margin: 20px 0;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Copyright = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Navigation = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Nav = styled.div`
  font-size: 16px;
  color: #536981;
  transition: all 400ms;
  margin: 0 10px;
  font-family: Charlie Text, sans-serif;
  text-decoration: underline;

  :hover {
    color: #0d1013;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    margin: 6px;
  }
`;
const DropDown = styled.button`
  width: 200px;
  height: 45px;
  border: 0;
  outline: none;
  border: 0.2px solid grey;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  padding-top: 60px;
  background-color: #fafbfc;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
