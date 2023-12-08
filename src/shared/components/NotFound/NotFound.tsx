import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const NotFoundHeading = styled.h1`
  font-size: 3em;
  color: #e74c3c; /* Red color */
`;

const NotFoundText = styled.p`
  font-size: 1.5em;
  color: #34495e; /* Dark gray color */
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 Not Found</NotFoundHeading>
      <NotFoundText>Sorry, the page you are looking for does not exist.</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
