import React from "react";
import styled from "styled-components";
import logo from "../../Assets/Trello.jpg";

export const Navigation = ({ bg }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <Logo src={logo} />
        <Register>
          <Button1>Log in</Button1>
          <Button2>Sign up</Button2>
        </Register>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ bg }) => (bg ? "white" : "#ECE8FF")};
  position: fixed;
  z-index: 15;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 130px;
  height: 30px;
  object-fit: contain;
  margin-left: 16px;

  @media screen and (max-width: 600px) {
    width: 100px;
    margin-left: 5;
  }
`;
const Register = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  margin-right: 20px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 160px;
    height: 40px;
    margin-right: 10px;
  }
`;
const Button1 = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: transparent;
  color: #0051cc;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 80px;
    height: 40px;
    font-size: 18px;
  }
`;
const Button2 = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: #0065ff;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;

  :hover {
    cursor: pointer;
    background-color: #0051cc;
  }

  @media screen and (max-width: 600px) {
    width: 80px;
    height: 40px;
    font-size: 18px;
    border-radius: 2px;
  }
`;
