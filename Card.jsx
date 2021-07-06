import React from "react";
import Details from "./Details";
import Picture from "./Picture";
function Card(props){

return(<div className="card">
    <div className="top">
    <p>{props.idNum}</p>
        <h2 className="name">{props.name}</h2>
        

        <Picture img={props.img}/>
    </div>   

    <div className="bottom">
       <Details info={props.tel} />
        <Details info={props.email}/>
    </div>

</div>)

};
export default Card; 