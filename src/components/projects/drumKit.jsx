import React from "react";
import styled from "styled-components";
import backgroundImage from "../../utils/images/gig.jpg";

const DrumKit = () => {
  return (
    <Wrapper styles>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 10px;
  height: 100vh;
  background-size: cover;
  background-image: url(${backgroundImage});
`

export default DrumKit;