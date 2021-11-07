import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";



import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMovie = ({ addMovie}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [posterurl, setPosterurl] = useState("");
  const [description, setDescription] = useState("");
  const [addRate,setAddRate] = useState("")

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuidv4(),
     title,
     posterurl,
     description,
     rating:addRate,
    };
    if (title==='' || posterurl==='' || description===''|| addRate==='' )
    return alert(" fill in the empty fields")
    

    addMovie(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title .."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Poster:</Form.Label>
            <Form.Control
              placeholder="Enter the poster .."
              onChange={(e) => setPosterurl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> description : </Form.Label>
            <Form.Control
              placeholder="Enter the description..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <ReactStars
    count={5}
     onChange={(e) => setAddRate(e)}

    size={24}
    activeColor="#ffd700"
  />

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group>

     
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Submit
          </Button>
        </Form>
    
      </Modal>
    </div>
  );
};

export default AddMovie;
