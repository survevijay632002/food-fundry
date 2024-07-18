import React from "react";
import { Container, ListGroup } from "react-bootstrap";
function Addtocart() {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}

export default Addtocart;
