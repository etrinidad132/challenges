import React, { Component } from "react";
import "./index.css";

// function MovieList() {

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      apiURL: "https://jsonmock.hackerrank.com/api/moviesdata?Year=",
      year: "",
      didSearch: false,
    };
  }

  getList() {
    fetch(this.state.apiURL + `${this.state.year}`).then((data) => {
      // this.setState({movies: da?ta, didSearch: true})
      // this.setState({movies: data})
    });
  }

  changeYear(e) {
    this.state.year = e.target.value;
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({didSearch: true})
    this.getList();
  }

  componentDidMount() {
    // this.refreshList()
  }

  render() {
    const { didSearch, movies } = this.state;
    const noResult = <div data-testid="no-result">No Results Found</div>;

    // let liRender = didSearch ?
    //   movies.length > 0 ?
    //     (movies.map((movie) => {
    //       return <li className="slide-up-fade-in py-10">{movie.Title}</li>
    //     })) : noResult : (<></>);

    let liRend;

    if (didSearch && movies.length === 0) {
      liRend = noResult;
    }

    if (didSearch && movies.length > 0) {
      liRend = movies.map((movie) => {
        return <li className="slide-up-fade-in py-10">{movie.Title}</li>;
      });
    }

    if (!didSearch) {
      liRend = <></>;
    }

    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input
            onChange={(e) => this.changeYear(e)}
            type="number"
            className="large"
            placeholder="Enter Year eg 2015"
            data-testid="app-input"
          />
          <button
            onClick={(e) => this.handleClick(e)}
            className=""
            data-testid="submit-button"
          >
            Search
          </button>
        </section>

        <ul className="mt-50 styled" data-testid="movieList">
          {liRend}
          {/* <li className="slide-up-fade-in py-10"></li> */}
        </ul>

        <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
      </div>
    );
  }
}
//   return (
//     <div className="layout-column align-items-center mt-50">
//       <section className="layout-row align-items-center justify-content-center">
//         <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input"/>
//         <button className="" data-testid="submit-button">Search</button>
//       </section>

//       <ul className="mt-50 styled" data-testid="movieList">
//         <li className="slide-up-fade-in py-10"></li>
//       </ul>

//       <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
//     </div>
//   );
// }

// export default MovieList
