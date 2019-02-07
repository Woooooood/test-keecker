import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import axios from 'axios'
;
class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            film: [],
            isLoaded: false
        };
        this.getFilms = this.getFilms.bind(this);
    }
    getFilms() {
        return axios.get('https://swapi.co/api/films/')
            .then((response) => {
                console.log(response.data.results);
                this.setState({
                    film: response.data.results,
                    isLoaded: true
                })
            })
    }
    componentDidMount() {
        this.getFilms()
    }
    render() {
        const { isLoaded, film } = this.state;
        console.log(film)
        if (!isLoaded) {
            return (
                <div>Loading ...</div>
            )
        }
        else {
            return (
                <div>
                    <h1>Welcome to Star-Wars App</h1>
                    {
                        film.map((m) => {
                            return (
                                <div>
                                    <MovieCard title={m.title} desc="Dans une galaxie ..." />
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }
}

export default Home