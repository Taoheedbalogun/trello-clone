import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const FourthComponent = ({ chn, text, img, note, naration }) => {
  return (
    <Container>
      <Wrapper chn={chn}>
        <WrapperImage src={img} />
        <WrapperContent>
          <Header>{text}</Header>
          <Title>{note}</Title>
          <Desc>{naration}</Desc>
          <Sub>
            <span>
              <AiOutlinePlus />
            </span>
            Learn more
          </Sub>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

const Header = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 17px;
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 22px;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  color: #7a869a;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 22px;
  }
`;
const Sub = styled.div`
  font-size: 24px;
  color: #091e42;

  span {
    font-size: 18px;
    margin-right: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const WrapperImage = styled.img`
  width: 500px;
  height: 350px;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    width: 90%;
    object-fit: contain;
  }
`;
const WrapperContent = styled.div`
  width: 600px;
  color: black;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #fafbfc;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ chn }) => (chn ? "row-reverse" : "row")};
  padding: 40px 0;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
