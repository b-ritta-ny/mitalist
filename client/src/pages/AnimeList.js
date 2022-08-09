import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import Login from "./Login";
// import AnimeCard from "../components/AnimeCard/AnimeCard"

function AnimeList({user, setUser}) {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }, []);

  if (!user) return <Login setUser={setUser} />;

//   const options = [
//     { value: 'All', label: 'All' },
//     { value: "Toei Animations", label: "Toei Animations" },
//     { value: "Perriot", label: "Perriot" },
//     { value: "Studio Sunrise", label: "Studio Sunrise" },
//     { value: "Bones", label: "Bones" },
//     { value: "David Production", label: "David Production" },
//     { value: "MAPPA", label: "MAPPA" },
//     { value: "A-1 Pictures", label: "A-1 Pictures" },
//   ]
  
//   //if(!user) return <Login user={user} setUser={setUser} />


//   return (
//     <div >
//       {user ? (
//         <div className='anime-container'>
//         <h1 className='anime-title'>Browse through our Collection of Popular Anime</h1>
        
//         <AnimeCard shows={options} /> 
//         </div>
//         ) : (
//         <h1>Please Log In or Create an Account</h1>
//       )
//       }
//     </div>
//   )
// }

  return (
    <Wrapper>
    <Button as={Link} to="/new">
      Log a new Anime
    </Button>
      {animes.length > 0 ? (
        animes.map((anime) => (
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
          <h2>No anime series yet!</h2>
          {/* <Button as={Link} to="/new">
            Log a new Anime
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


export default AnimeList;