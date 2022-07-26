import { useState } from "react";
// import { useHistory } from "react-router";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button, FormField, Input, Label, Textarea } from "../styles";

function NewAnime({ user, onAddAnime }) {

    // const Fav = "★"
    // const notFav = "☆"

    // const [title, setTitle] = useState("One Piece");
    // const [genre, setGenre] = useState("Action, Adventure, Fantasy");
    // const [bio, setBio] = useState(`Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!
    // `);
    // const [image, setImage] = useState("https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg")
    // const [studio, setStudio] = useState("Toei Animation")
    // //   const [episodes, setEpisodes] = useState(1028)
    // //   const [watching, setWatching] = useState(true)
    // //   const [finished, setFinished] = useState(false)
    // //   const [episodesWatched, setEpisodesWatched] = useState(1005)
    // const [favorite, setFavorite] = useState(null)
    const options = [
        {value: '', text: 'Add to Favorites?'},
        {value: 'No', text: 'No'},
        {value: 'Yes', text: 'Yes'},
    ];
    
    // const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const history = useHistory();

    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        bio: "",
        image: "",
        studio: "",
        // episodes: episodes,
        // watching,
        // finished,
        // episodes_watched: episodesWatched,
        favorite: false,
    });



    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
        console.log(e.target.value);
    }

    function createAnime(e) {
        e.preventDefault();
        sendAnimeToApi(formData);
    }

    function sendAnimeToApi(data) {
        setIsLoading(true);
        fetch("/animes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((anime) => {
            onAddAnime(anime);
            setFormData({
                title: "",
                genre: "",
                bio: "",
                image: "",
                studio: "",
                // episodes: episodes,
                // watching,
                // finished,
                // episodes_watched: episodesWatched,
                favorite: "",
            });
        });
    }


    return (
        <Wrapper>
        <WrapperChild>
            <h2>Add New Anime</h2>
            <form onSubmit={(e) => createAnime(e)}>
            <FormField>
                <Label htmlFor="title">Title</Label>
                <Input
                type="text"
                id="title"
                placeholder="Anime Title"
                value={formData.title}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="genre">Genre</Label>
                <Input
                type="text"
                id="genre"
                placeholder="Genre(s)"
                value={formData.genre}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="studio">Studio</Label>
                <Input
                type="text"
                id="studio"
                placeholder="Anime Studio (ex: Bones, Kyoto Animation, MAPPA, etc...)"
                value={formData.studio}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                id="bio"
                rows="10"
                placeholder="Anime Synopsis"
                value={formData.bio}
                onChange={handleChange}
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
                placeholder="Image Link (ex: https://img1.ak.crunchyroll.com/i/spire4/805...)"
                value={formData.image}
                onChange={handleChange}
                />
            </FormField>
            <FormField>
                {/* <Button color="primary" className='favorite-button' onClick={(e) => e.preventDefault}>
                    { favorite === true ? Fav : notFav} 
                </Button> */}
                <Label htmlFor="favorite">Add to Favorites?</Label>
                <select id="favorite" value={formData.favorite} onChange={handleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                {/* <Checkbox 
                type="checkbox"
                id="favorite"
                value={formData.favorite}
                onChange={handleChange}/> */}

                {/* <select onChange={handleChange} value={this.state.value}>
                    <option value={formData.favorite}>Yes</option>
                    <option value={formData.favorite} defaultValue={true}>No</option>
                </select> */}
            </FormField>
            <FormField>
                <Button color="primary" type="submit" id="submitBtn" >
                {isLoading ? "Loading..." : "Add Anime"}
                </Button>
            </FormField>
            {/* <FormField>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
            </FormField> */}
            </form>
        </WrapperChild>
        <WrapperChild>
            <Image src={formData.image} alt="display image" />
            <h1>{formData.title}</h1> 
            <p>
                <em>Genre: {formData.genre}</em>
            </p>
            <p>
                <em>Studio: {formData.studio}</em>
            </p>
            <ReactMarkdown>{formData.bio}</ReactMarkdown>
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

    // const Checkbox = styled.input`
    // `;

export default NewAnime;