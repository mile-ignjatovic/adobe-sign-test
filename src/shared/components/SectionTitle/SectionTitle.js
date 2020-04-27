import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  margin: 1rem 0;
  margin-bottom: .5rem;
  `;

const SectionTitle = (props) => {
  return (
        <Title>{props.children}</Title>
  );
}

export default SectionTitle;