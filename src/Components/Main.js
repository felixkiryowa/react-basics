import React from 'react';
import ContactCard from './ContactCard';

function Main() {
    
    let first_name = 'Francis';
    let last_name = 'Kiryowa';
    let friends = ['abenakyo', 'peace', 'franco', 'jackie']

    const styles = {
        color:'green', 
        backgroundColor:'purple'
    }
    
    return (
        <main>
            {/* <h3 style={styles}>This is main content of the page</h3>
            <p>Hello {`${first_name}  ${last_name}`}</p>
            <ul>
                {
                    friends.map((name, index) => {
                       console.log(name);
                      return <li key={index}>{name}</li>;

                    })
                }
                
            </ul> */}

            <ContactCard 
            name="Miss.Peace" 
            imgUrl={require("../images/Final year.jpg")}
            email="peace@gmail.com" 
            phone="(256) 7550987865" />
            <ContactCard 
            name="Mr.Kiryowa" 
            imgUrl={require("../images/Final year.jpg")}
            email="franciskiryowa68@gmail.com" 
            phone="(256) 700162509" />
            <ContactCard 
            name="Mr. Kasumba" 
            imgUrl={require("../images/Final year.jpg")}            
            email="kasumba@gmail.com" 
            phone="(256) 704578976" />
            <ContactCard 
            name="Mr.Kintu" 
            imgUrl={require("../images/Final year.jpg")}            
            email="kintu@gmail.com" 
            phone="(256) 75502439" />
        </main>

    )
}
export default Main;