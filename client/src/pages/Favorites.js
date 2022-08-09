import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import Login from "./Login";
// import AnimeCard from "../components/AnimeCard/AnimeCard"

function Favorites({user, setUser}) {
    
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
    fetch("/animes")
        .then((r) => r.json())
        .then(setAnimes);
    }, []);

    if (!user) return <Login setUser={setUser} />;


    return (
        <Wrapper>
            <Button as={Link} to="/my-anime">
                Back to anime list
            </Button>
                {animes.length > 0 ? (animes.map((anime) => (
                    <>
                        <Anime key={anime.id}>
                            <Box>
                                <p>
                                    <Image src={anime.image} alt="display image" />
                                </p>
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
                    </>
                ))
            ) : (
                <>
                    <h2>No favorite series yet!</h2>
                    {/* <Button as={Link} to="/my-anime">
                        Back to anime list
                    </Button> */}
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  column-count: 2;
`;

const Anime = styled.article`
  max-width:300px;
  margin-bottom: 24px;
  padding-top: 24px;
`;

const Image = styled.img`
width: 100%;
height: 100%;
`;


export default Favorites;