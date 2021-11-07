import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchMovie from "../Filter/SearchMovie";
import AddMovie  from "../AddMovie/AddMovie";
import "./navbar.css";
import ReactStars from 'react-rating-stars-component';
import Movie  from "../Movie/Movie";
 



const NavBar = ({ addMovie, setFilterByName,setRate}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="navbarDesign">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <ReactStars
  count={5}
  onChange={(e) => setRate(e)}
  size={24}
  edit={true}
  color2={'#ffd700'} />
          <Nav className="me-auto">
           
           
          </Nav>

          <SearchMovie setFilterByName={setFilterByName} />

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
