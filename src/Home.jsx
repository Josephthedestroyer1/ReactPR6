import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import movieList from "./Data";



function Home() {
  // State variables to manage movie list and input values
  const [movies, setMovies] = useState(movieList);
  const [inputTitle, setInputTitle] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputRating, setInputRating] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputTrailer, setInputTrailer] = useState("");
  const addMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      title: inputTitle,
      info: inputInfo,
      description: inputDescription,
      rating: parseInt(inputRating),
      img: inputImage,
      trailer: inputTrailer,
    };
    // Update the movies state by appending the new movie
    setMovies([...movies, newMovie]);
    // Reset input values to empty after adding a movie
    setInputTitle("");
    setInputDescription("");
    setInputImage("");
    setInputInfo("");
    setInputRating("");
    setInputTrailer("");
  };
  return (
    <div>
      <header>
        <nav>
          <h1 className="title1">Movies</h1>
        </nav>
      </header>
      <form className="inputss" onSubmit={addMovie}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <label htmlFor="info">Info</label>
        <input
          type="text"
          id="info"
          value={inputInfo}
          onChange={(e) => setInputInfo(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          value={inputRating}
          onChange={(e) => setInputRating(e.target.value)}
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={inputImage}
          onChange={(e) => setInputImage(e.target.value)}
        />
        <label htmlFor="trailer">Trailer Link</label>
        <input
          type="text"
          id="trailer"
          value={inputTrailer}
          onChange={(e) => setInputTrailer(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}
export default Home;
