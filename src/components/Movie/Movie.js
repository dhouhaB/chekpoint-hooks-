import React from "react";
import { Card } from "react-bootstrap";
import "./Movie.css"
import { Link } from "react-router-dom";


import ReactStars from 'react-rating-stars-component'



const Movie = ({
movie: { id, title, posterurl, description,rating},

 
}) => {
  return (
    <div>
          <Link to={`/moviedetails/${id}`}>

      <Card style={{ width: "18rem", margin: "40px" }}>
        <Card.Img variant="top" src={posterurl} />
        <Card.Body>
          <Card.Title className="titleDesign">{title}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <ReactStars
  count={5}
  
  size={24}
  color2={'#ffd700'} 

    value={rating}
    edit={false}
  
  />
    
       
        </Card.Body>
      </Card>
      </Link>

    </div>
  );
};

export default Movie;







