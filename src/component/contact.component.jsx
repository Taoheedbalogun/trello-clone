import React from "react";
import styled from "styled-components";
import img1 from "../Assets/apple.svg";
import img2 from "../Assets/google..svg";

export const ContactComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Content>
            <Text>
              Sign up and get started with Trello today. A world of productive
              teamwork awaits!
            </Text>
            <Register>
              <Input placeholder="Email" />
              <Button>Sign up</Button>
            </Register>
          </Content>
        </Box>
        <NoteWrapper>
          <Pusher>
            <Sub>Trello also works great on your smaller screen.</Sub>
            <ImageWrapper>
              <Image src={img1} />
              <Image src={img2} />
            </ImageWrapper>
          </Pusher>
        </NoteWrapper>
      </Wrapper>
    </Container>
  );
};

const ImageWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
  }
`;
const Pusher = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const NoteWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image = styled.img`
  object-fit: contain;
  width: 180px;
  height: 52px;
  margin: 0 5px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 130px;
  }
`;

const Sub = styled.div`
  font-size: 29px;
  display: flex;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const Register = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 82%;
  height: 300px;
  border-radius: 10px;
  background-color: #455cbf;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    width: 90%;
    height: 350px;
  }
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    width: 80%;
    font-size: 26px;
    line-height: 40px;
  }
`;
const Input = styled.input`
  border: 0;
  outline: none;
  width: 350px;
  height: 40px;
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    padding-left: 10px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Button = styled.button`
  border: 0;
  outline: none;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  background-color: #00bcdd;
  transition: all 400ms;
  margin-left: 10px;

  :hover {
    cursor: pointer;
    background-color: #0098b3;
  }

  @media screen and (max-width: 500px) {
    width: 75%;
    height: 50px;
    font-size: 30px;
    background-color: #00aa55;
    margin-left: 0px;

    :hover {
      background-color: #008241;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background-color: #fafbfc;
  padding-top: 50px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
