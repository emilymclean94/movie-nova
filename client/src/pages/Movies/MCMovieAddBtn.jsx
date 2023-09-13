import React from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from "../../utils/mutations";
import { toast } from "react-toastify";
import { BsInfoSquareFill } from "react-icons/bs"
import './movies.css';

const AddMovieButton = ({ username, movie }) => {
  const { original_title, overview, poster_path, release_date, _id } = movie;

  const [addMovie] = useMutation(ADD_MOVIE);

  const handleAddMovie = async () => {
    try {
      const { data } = await addMovie({
        variables: {
          title: original_title,
          description: overview,
          releaseDate: release_date,
          posterImg: `https://image.tmdb.org/t/p/w300${poster_path}`,
          username: username,
          _id: _id,
        },
      });

      // Show success notification
      toast.success("Movie added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Added movie data:", data); // Check the data returned by the mutation
    } catch (error) {
      console.error(error);
      // Show error notification if there's an error
      toast.error("Failed to add the movie. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (

    <>

    {/* Desktop View */}
    <Button 
    id="add-btn"
    className="card-button" 
    variant="primary" 
    onClick={handleAddMovie}>
      Add Movie
      
    </Button>

    {/* Mobile View */}
    <BsInfoSquareFill />

    </>
  );
};

export default AddMovieButton;
