import { RouteComponentProps } from "@reach/router";
import React from "react";
import HeroContainer from "../containers/Hero";

const Home = (props: RouteComponentProps) => {
  return (
    <>
      <HeroContainer />
    </>
  );
};

export default Home;
