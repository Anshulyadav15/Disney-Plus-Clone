import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import movieData from "../movieData";

function Row({type,title}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = movieData.filter((movie) => movie.type === type);
    setMovies(filteredMovies);
  }, [type]);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {movies.map((movie, index) => (
          <Wrap key={index}>
            <Link to={"/detail/" + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Row;

const Container = styled.div`
  padding-top: 0 0 26px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  grid-gap: 26px;
  margin-top: 20px;
`;
const Wrap = styled.div`

  img {
    width: 100%;
    height: 100%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
`;
