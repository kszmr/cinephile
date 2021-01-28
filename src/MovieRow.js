import React from 'react';

class MovieRow extends React.Component {
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <div className="card">
            <div><img alt="poster" width="80" src={this.props.movie.posterSrc}/></div>
            
            <div className="text">
                <div className="title">{this.props.movie.title}</div>
                <div className="overview">{this.props.movie.overview}</div>
                <input class="viewButton" type="button" onClick={this.viewMovie.bind(this)} value="View" />
            </div>
      </div>
    }
}

export default MovieRow