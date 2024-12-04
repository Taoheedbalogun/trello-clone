import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import img from "../Assets/board.png";
import img1 from "../Assets/costo.png";
import img2 from "../Assets/google.png";
import img3 from "../Assets/fender.png";
import img4 from "../Assets/space.jpg";

export const SecondComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>It’s more than work. It’s a way of working together.</Title>
          <Desc>
            Start with a Trello board, lists, and cards. Customize and expand
            with more features as your teamwork grows. Manage projects, organize
            tasks, and build team spirit—all in one place.
          </Desc>
          <Button>
            Start doing
            <span>
              <AiOutlineArrowRight />
            </span>
          </Button>
        </Content>
        <Image src={img} />
        <Sub>
          <Info>
            Join over 1,000,000 teams worldwide that are using Trello to get
            more done.
          </Info>
          <Logos>
            <Logo src={img2} />
            <Logo src={img3} />
            <Logo src={img4} />
            <Logo src={img1} />
          </Logos>
        </Sub>
      </Wrapper>
    </Container>
  );
};

const Sub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Logos = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 60px;
  object-fit: contain;
  margin: 0 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Info = styled.div`
  font-size: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 21px;
    text-align: center;
  }
`;
const Image = styled.img`
  width: 83%;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;
const Content = styled.div`
  width: 70%;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: #091e42;
  font-weight: 600;
  line-height: 48px;
  font-family: Charlie Display, sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 22px;
    line-height: 35px;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  font-family: Charlie Text, sans-serif;
  line-height: 29px;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 19px;
  }
`;
const Button = styled.button`
  border: 0;
  outline: none;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  color: #0065ff;
  border: 1px solid #0065ff;
  font-size: 20px;
  background-color: transparent;
  transition: all 400ms;
  margin-bottom: 30px;

  span {
    margin-left: 8px;
    font-size: 15px;
  }

  :hover {
    cursor: pointer;
    background-color: #0065ff;
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fafbfc;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;
