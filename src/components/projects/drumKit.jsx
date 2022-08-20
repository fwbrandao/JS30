import React from 'react';
import styled from 'styled-components';
import image from '../../utils/images/gig.jpg';

const DrumKit = () => {
  return (
    <Wrapper image={image}></Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${props => props.image});
`;

export default DrumKit;