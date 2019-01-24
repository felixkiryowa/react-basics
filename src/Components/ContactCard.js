import React from 'react';


function ContactCard(props) {
    console.log(props);
    return (

       <div className="contact-card">
          <img src={props.contact.imgUrl} alt="francis" height="300px" width="200px"/>
          <h3>{props.contact.name}</h3>
          <p>{props.contact.phone}</p>
          <p>{props.contact.email}</p>
       </div> 
    )
}

export default ContactCard;