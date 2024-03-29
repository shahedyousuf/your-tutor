import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, image, description } = service;

  const navigate = useNavigate();
  const handleAddToCart = () => {
    navigate("/checkout");
  };
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 position-relative">
      <Card className="">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fw-semibold">{name}</Card.Title>
          <Card.Text className="fs-5">{description}</Card.Text>
          <br />
          <Button
            onClick={handleAddToCart}
            className="position-absolute bottom-0 translate-middle-x"
            variant="primary"
          >
            Go to course
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
