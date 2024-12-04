import React, { useState } from "react";
import { Navigation } from "../navigation/navigation.component";
import { TopComp } from "../top.component";
import { SecondComponent } from "../second.component";
import { ThirdComponent } from "../third.component";
import { FourthBuild } from "../FourthComponent/fourthBuild.component";
import { FifthComponent } from "../fifth.component";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const onHandle = () => {
    const check = window.scrollY;
    if (check >= 70) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  window.addEventListener("scroll", onHandle);

  return (
    <div>
      <Navigation bg={toggle ? "bg" : ""} />
      <TopComp />
      <SecondComponent />
      <ThirdComponent />
      <FourthBuild />
      <FifthComponent />
    </div>
  );
};

export default Home;
