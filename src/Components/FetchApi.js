import React from 'react';
import Actors from './Actors';
import MovieDetails from './MovieDetails'; 


class FetchApi extends React.Component {
    constructor () {
        super();

        this.state = {
            loading:false,
            character:{},
            all_results:[],
            movie_info: {},
            loading_movie_details:false
        }

        this.handleMovieLinkClick = this.handleMovieLinkClick.bind(this);
    }

    componentDidMount () {
        this.setState({
            loading:true
        })
        fetch('https://swapi.co/api/people/').then((response) => response.json()).then((data) => {
            console.log(data.results);
            console.log(data);
            this.setState({
                loading:false,
                character:data,
                all_results:data.results
            });

        })

    }

    handleMovieLinkClick(mov){
      console.log(mov);
      fetch(mov).then(response => response.json()).then(data => {
          console.log(data);
          this.setState({
              loading:false,
              loading_movie_details:true,
              movie_info:data
          })
      });
      
    }

    render () {


        const all_actors = this.state.all_results.map((actor) => {

            const films = actor.films;
            console.log(films);

        
            return <Actors keys={actor.mass} handleMovieLinkClick = {this.handleMovieLinkClick}    actors_content={
                {
                    birth_year: actor.birth_year,
                    created: actor.created,
                    edited: actor.edited,
                    eye_color: actor.eye_color,
                    gender: actor.gender,
                    hair_color: actor.hair_color,
                    height: actor.height,
                    homeworld: actor.homeworld,
                    mass: actor.mass,
                    name: actor.name
                }
            }  movie_links = {films}/>
        });
       
        return (
            <div>
                {this.state.loading ? <h1>Loading.....</h1> : all_actors}

            </div>

        )
    }
}

export default FetchApi;