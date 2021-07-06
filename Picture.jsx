import React from "react";

 function Picture(props){
     return(
        <img className="circle-img" src={props.img} alt="avatar_img" />

     )
 };

 export default Picture;