import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state ={
    isLoading : true,
    movies : []
  };
  getMovies = async () => { // axios가 데이터를 가져올때까지 기다린다.
    // async가 있어야 await 사용 가능
    const {
      data: {
        data: {movies}
      }
    }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false}); // state에 movies값 넣기
    console.log(movies);
  };

  componentDidMount() { // 페이지 생성 시 가장 먼저 동작
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
            <div className = "loader">
              <span className ="loader_text">Loading...</span>
            </div>
          ):(
              <div className="movies">
        { movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
          ))}}
            </div>
        )}
        </section>
  );
  }
}

export default App;
