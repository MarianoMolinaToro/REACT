import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardComponent(props) {
  const buttonColors = ['success', 'primary', 'danger', 'warning'];
  const colorIndex = props.index % buttonColors.length;

  return (
    <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
    <Card style={{ width: '18rem', alignItems: 'center' }}>
      <Card.Img variant="top" src={props.imageSrc} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {}
      </Card.Body>

      <Button
        variant={buttonColors[colorIndex]}
        className="custom-width-button"
        style={{ marginBottom: '10px' }}
      >
        {props.buttonText} {}
      </Button>{' '}
    </Card>
  </div>
);
}

export default CardComponent;
