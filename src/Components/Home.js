import React from "react";
import styled from "styled-components";
import Imgslider from "./Imgslider";
import Viewer from "./Viewer";
import Row from "./Row";

function Home() {
  return (
    <Container>
      <Imgslider />
      <Viewer />
      <Row type={"recommend"} title={"Recommend For You"}/>
      <Row type={"new"} title={"New To Disney"}/>
      <Row type={"original"} title={"Originals"}/>
      <Row type={"trending"} title={"Trending"}/>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  position: relative;

  &:before {
    background: url("../images/home-background.png") center center/cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
