import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  `;

const SectionTitle = (props) => {
  return (
        <Title>{props.children}</Title>
  );
}

export default SectionTitle;