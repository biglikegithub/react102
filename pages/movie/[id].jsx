import React from 'react';
import Axios from 'axios';

const API_KEY = "8018e581"



class MovieDetail extends React.Component {
    state = {
        movie: {}
    }
    static async getInitialProps({ query: { id } }) {
        if (id) {
            const res = await Axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            return res.status === 200 ? { movie: res.data } : null;
        }

    }
    render() {
        const { movie } = this.props;
        return (movie ? (<div>
            <img src={movie.Poster} alt={movie.title} />
            <p>Movie: {movie.Title}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Award: {movie.Awards}</p>
        </div>) : null
        )
    }
}

export default MovieDetail;