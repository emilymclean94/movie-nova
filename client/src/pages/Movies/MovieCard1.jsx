// import React, { useState, useEffect } from "react";
// import { Card, Button, Modal } from "react-bootstrap";
// import axios from "axios";
// import MovieModal from "./MovieModal";
// import { useMutation } from "@apollo/client"; // Removed useQuery import
// import { ADD_MOVIE } from "../../utils/mutations";

// const MovieCard = ({ username, movie }) => {
//   const { original_title, overview, poster_path, release_date, _id } = movie;

//   const [movieData, setMovieData] = useState({
//     title: "",
//     description: "",
//     releaseDate: "",
//     posterImg: "",
//     username: "",
//     _id: "",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [movies, setMovies] = useState([]);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleCloseSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   const [addMovie] = useMutation(ADD_MOVIE);

//   const handleMoreInfo = () => {
//     setShowModal(true);
//   };

//   const handleAddMovie = async () => {
//     const updatedMovieData = {
//       ...movieData,
//       title: original_title,
//       description: overview,
//       releaseDate: release_date,
//       posterImg: `https://image.tmdb.org/t/p/w300/${poster_path}`,
//       username: username,
//       _id: _id,
//     };

//     setMovieData(updatedMovieData);

//     useEffect(() => {
//       fetchMovies();
//     }, []);

//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.themoviedb.org/3/movie/",
//           {
//             params: {
//               api_key: "93d064eaaeea0b2a09e2e20af37a5993",
//               page: 1,
//             },
//           }
//         );
//         setMovies(response.data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const addMovie = (movie) => {
//       console.log(movie);
//       console.log(movies);
//       setMovies([...movies, movie]);
//       setShowSuccessModal(true);

//       console.error(error);
//     };
//   };

//   return (
//     <Card style={{ width: "16rem" }}>
//       <Card.Img
//         variant="top"
//         src={`https://image.tmdb.org/t/p/w300${poster_path}`}
//       />
//       <Card.Body>
//         <Card.Title>{original_title}</Card.Title>
//         <Card.Text>Release Date: {release_date}</Card.Text>
//         <div className="d-flex align-items-center justify-content-center">
//           <Button variant="primary" size="md" onClick={handleMoreInfo}>
//             More Info
//           </Button>
//           <Button
//             variant="primary"
//             size="md"
//             onClick={(handleAddMovie) => addMovie(movie)}
//           >
//             Add Movie
//           </Button>
//         </div>
//       </Card.Body>
//       {showModal && <MovieModal movie={movie} onClose={handleCloseModal} />}
//       <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Success!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>The movie has been added to your wishlist!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseSuccessModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Card>
//   );
// };

// export default MovieCard;
