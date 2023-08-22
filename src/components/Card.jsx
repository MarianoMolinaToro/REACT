import React from 'react';
import PropTypes from 'prop-types';
import Tags from './Tags';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ image, name, description }) => {
  return (
    <BootstrapCard className="card">
      <BootstrapCard.Img variant="top" src={image} alt={name} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <div className="tags-container">
          <Tags text="Amigable" color="success" />
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
