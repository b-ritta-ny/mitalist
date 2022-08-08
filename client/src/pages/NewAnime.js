import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewAnime({ user }) {

    // const Fav = "★"
    // const notFav = "☆"

    const [title, setTitle] = useState("One Piece");
    const [genre, setGenre] = useState("Action, Adventure, Fantasy");
    const [bio, setBio] = useState(`Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!
    `);
    const [image, setImage] = useState("https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg")
    const [studio, setStudio] = useState("Toei Animation")
    //   const [episodes, setEpisodes] = useState(1028)
    //   const [watching, setWatching] = useState(true)
    //   const [finished, setFinished] = useState(false)
    //   const [episodesWatched, setEpisodesWatched] = useState(1005)
    const [favorite, setFavorite] = useState(true)

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/animes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            genre,
            bio,
            image,
            studio,
            // episodes: episodes,
            // watching,
            // finished,
            // episodes_watched: episodesWatched,
            favorite,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            history.push("/");
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <Wrapper>
        <WrapperChild>
            <h2>Create Recipe</h2>
            <form onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="title">Title</Label>
                <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="genre">Genre</Label>
                <Input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="studio">Studio</Label>
                <Input
                type="text"
                id="studio"
                value={studio}
                onChange={(e) => setStudio(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                id="bio"
                rows="10"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                />
            </FormField>
            {/* <FormField>
                <Label htmlFor="episodes">Episodes</Label>
                <Input
                type="number"
                id="episodes"
                value={episodes}
                onChange={(e) => setEpisodes(e.target.value)}
                />
            </FormField> */}
            <FormField>
                <Label htmlFor="image">Image</Label>
                <Input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </FormField>
            <FormField>
                {/* <Button color="primary" className='favorite-button' onClick={(e) => e.preventDefault}>
                    { favorite === true ? Fav : notFav} 
                </Button> */}
                <Label htmlFor="favorite">Favorite</Label>
                <select onChange={(e) => setFavorite(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false" selected>No</option>
                </select>
            </FormField>
            <FormField>
                <Button color="primary" type="submit" as={Link} to="/my-anime">
                {isLoading ? "Loading..." : "Add Anime"}
                </Button>
            </FormField>
            <FormField>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
            </FormField>
            </form>
        </WrapperChild>
        <WrapperChild>
            <Image src={image} alt="display image" />
            <h1>{title}</h1>
            <p>
                <em>Genre: {genre}</em>
            </p>
            <p>
                <em>Studio: {studio}</em>
            </p>
            <ReactMarkdown>{bio}</ReactMarkdown>
        </WrapperChild>
        </Wrapper>
    );
    }

    const Image = styled.img`
    width: 46%;
    height: 46%;
    `;

    const Wrapper = styled.section`
    max-width: 1000px;
    margin: 40px auto;
    padding: 16px;
    display: flex;
    gap: 24px;
    `;

    const WrapperChild = styled.div`
    flex: 1;
    `;

export default NewAnime;