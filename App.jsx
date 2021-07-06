import React from "react";
import Card from "./Card";
import Picture from "./Picture";
import contacts from "../contact";

function createCard(contact){
  return (
    <Card
    idNum={contact.img}
     key={contact.id}
     name={contact.name}
     img= {contact.imgURL}
     tel={contact.phone} 
     email={contact.email}  />
  )
};

function App(){
    return(
    <div>
    <h1 className="heading">My Contact Cards</h1>
    <Picture img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQNk6GCdVnxqtsfmbQfhv_K_Qwbvks-Ub3g&usqp=CAU" />

    {contacts.map(createCard)}


   {/* <Card name="Beyonce"
         img= "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
         tel="+123 456 789"
         email="b@beyonce.com" />

   <Card
         name="Jack Bauer"
         img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
         tel="+7387384587"
         email="jack@nowhere.com"
    /> */}

  </div>)
};
 export default App;
