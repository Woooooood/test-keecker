import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div>
                <h3>Titre : {this.props.title}</h3>
                <p> Description : {this.props.desc}</p>
            </div>
        );
    }
}

export default MovieCard