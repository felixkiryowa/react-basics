import React from 'react';

function Actors(props) {
    console.log(props.actors_content);
    const button_styles = {
        backgroundColor:"purple",
        color:"white",
        borderRadius: "8px",
        fontSize: "16px"
    }
    const film_links = props.movie_links.map((mov) => {
        return <ul keys={mov}>
            <li>{mov} || <button style={button_styles} onClick={

              () =>  props.handleMovieLinkClick(mov)
              
              }>View Details</button></li>
        </ul>
    });
    return (
        <div>
            <h4 style={{color:"green",fontStyle:"italic"}}>{props.actors_content.name}</h4><br></br>
            <small>{props.actors_content.homeworld}</small><br></br>
            <small>{props.actors_content.birth_year}</small><br></br>
            <small>{props.actors_content.created}</small><br></br>
            <small>{props.actors_content.edited}</small><br></br>
            <small>{props.actors_content.eye_color}</small><br></br>
            <small>{props.actors_content.gender}</small><br></br>
            <small>{props.actors_content.hair_color}</small><br></br>
            <small>{props.actors_content.height}</small><br></br>
            <small>{props.actors_content.mass}</small><br></br>
            <div>
                {
                   film_links  
                }
            </div>
            <hr></hr>
        </div>
    )
}

export default Actors ;