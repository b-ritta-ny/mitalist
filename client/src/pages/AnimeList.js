import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import Login from "./Login";

function AnimeList({user, setUser}) {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <Wrapper>
      {animes.length > 0 ? (
        animes.map((anime) => (
          <Anime key={anime.id}>
            <Box>
              <h2>{anime.title}</h2>
              <p>
                <em>Genre: {anime.genre}</em>
              </p>
              <p>
                <em>Studio: {anime.studio}</em>
              </p>
              <ReactMarkdown>{anime.bio}</ReactMarkdown>
            </Box>
          </Anime>
        ))
      ) : (
        <>
          <h2>No animes Found</h2>
          <Button as={Link} to="/new">
            Log a new Anime
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Anime = styled.article`
  margin-bottom: 24px;
`;

export default AnimeList;