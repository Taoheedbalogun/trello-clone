import React from "react";
import styled from "styled-components";

export const ThirdComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Features to help your team succeed</Title>
          <Desc>
            Powering a productive team means using a powerful tool (and plenty
            of snacks). From meetings and projects to events and goal setting,
            Trello’s intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Content = styled.div`
  width: 550px;
  height: 100%;
  margin-left: 120px;

  @media screen and (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  font-family: Charlie Text, sans-serif;
  line-height: 30px;
  letter-spacing: 1px;

  @media screen and (max-width: 600px) {
    font-size: 19px;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  background-color: #fafbfc;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
