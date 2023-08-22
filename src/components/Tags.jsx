import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, color }) => {
  return <Badge bg={color}>{text}</Badge>;
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tags;
