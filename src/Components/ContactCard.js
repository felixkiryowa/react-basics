import React from 'react';


function ContactCard(props) {
    console.log(props);
    return (

       <div className="contact-card">
          <img src={props.imgUrl} alt="francis" height="300px" width="200px"/>
          <h3>{props.name}</h3>
          <p>{props.phone}</p>
          <p>{props.email}</p>
       </div> 
    )
}

export default ContactCard;