import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import Axios from "axios";
import { throws } from "assert";

import { Row, From, Button, Col } from "react-bootstrap";

const API_KEY = "8018e581";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this.state.query);
    Axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.query}`
    ).then(res => {
      if (res.data) {
        this.setState({
          movie_list: res.data.Search
        });
      }
    });
  }

  render() {
    const { query, movie_list } = this.state;
    return (
      <Layout>
        <form action="" onSubmit={this.handleClick}>
          <Col>
            <Row>
              <input
                type="text"
                value={query}
                onChange={e => this.setState({ query: e.target.value })}
              />
              <button > хайх</button>
            </Row>
          </Col>
        </form>
        {movie_list &&
          movie_list.map(movie => (
            <MovieCard
              id={movie.imdbID}
              key={movie.imdbID}
              title={movie.Title}
              img={movie.Poster}
            />
          ))}

        <MovieCard title="test" img="" />
      </Layout>
    );
  }
}

export default Home;
