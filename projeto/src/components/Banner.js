import React, { useEffect } from "react";
import "./Banner.css";

function Banner(){

    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async (_path) => {
        try{ 
            const netflixOriginalsCategory = categories.find(
            (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movie = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(movie[randomIndex]);
        } catch(error) {
            console.log("Banner fetchRandommovie error: ", error);
        }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    return <div>Banner</div>;

}

export default Banner;