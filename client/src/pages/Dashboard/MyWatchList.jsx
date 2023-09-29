import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIES } from "../../utils/queries";
import WLMovieDeleteBtn from "./WLMovieDeleteBtn";
import WLMovieInfoBtn from "./WLMovieInfoBtn";
import WatchListCard from "./WatchListCard";
import axios from "axios";

const MyWatchList = () => {
  // const [movies, setMovies] = useState([]);
  // const { data } = useQuery(QUERY_MOVIES);

  // useEffect(() => {
  //   if (data && data.movies) {
  //     setMovies(data.movies); // Check if data.movies is defined before setting the state
  //   }
  // }, [data]);

  // // Log the data and current state of movies for debugging
  // console.log("Data from server:", data);
  // console.log("Current state of movies:", movies);
  const [results] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    const apiKey = "93d064eaaeea0b2a09e2e20af37a5993";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <Col className="mywatchlist">
      <Row>
        <h2 className="watchlist-title">Your watched list:</h2>
      </Row>
      <Row>
        <Col>
          {results.length === 0 && (
            <div>
              {popularMovies.filter((item, idx) => idx < 5).map((movie) => (
                <WatchListCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default MyWatchList;
// <Col className="mywatchlist">
//   <h2 className="watchlist-title text-center m-3">Your Watch List!</h2>

//   <Col className="m-3 watchlist-table">
//     <Table
//       className="table"
//       responsive="lg"
//       striped="true"
//       bordered="true"
//       hover="true"
//       size="sm"
//     >
//       <thead>
//         <tr className="font text-center">
//           <th>IMG</th>
//           <th>Title</th>
//           <th>Overview</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {movies.map((movie) => (
//           <tr key={movie._id}>
//             <td className="poster-container-watched">
//               <img
//                 className="poster-watched"
//                 src={movie.posterImg}
//                 alt={movie.title}
//               />
//             </td>
//             <td className="movie-title">{movie.title}</td>
//             <td className="overview">{movie.description}</td>
//             <td className="buttons">
//               <div className="info-button">
//                 <WLMovieInfoBtn movie={movie} />
//               </div>
//               <div className="delete-button">
//                 <WLMovieDeleteBtn movieId={movie._id} />
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   </Col>
// </Col>
