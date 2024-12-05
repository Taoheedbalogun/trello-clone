import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderMain } from "./sliderMain.component";

export const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <SliderMain
            header="INDUSTRY"
            sub="eCommerce"
            note="Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together."
            text="BHARATH SUNDAR Finance, eBay"
          />
          <SliderMain
            header="INDUSTRY"
            sub="Travel"
            note="Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others."
            text="KERRY PARKER-EVANS IT Project Manager, Egencia"
          />
          <SliderMain
            header="INDUSTRY"
            sub="Sport"
            note="Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key."
            text="HAYDON DOTSON Sales Manager, Detroit Red Wings"
          />
          <SliderMain
            header="INDUSTRY"
            sub="Marketing"
            note="Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead."
            text="HALEY ENNES HR Manager, Sprout Social"
          />
        </Slider>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div``;
