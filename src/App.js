import React from 'react';
import styled from 'styled-components';
import { DrumKit } from './components/projects';
import Card from './core/card';

function App() {
  return (
    <>
      <NavBar><h2 style={{ color: "white" }}>JavaScrypt 30</h2></NavBar>
      <Wrapper>
        <Grid>
          <Card>
            <DrumKit />
          </Card>
        </Grid>
      </Wrapper>
      <Footer>
        <CardLink>Fernando Brandao</CardLink>
      </Footer>
    </>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: rgb(0,191,255);
  border-radius: 3px;
`;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 100px;
  height: 100%;
}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 200px 200px;
  grid-gap: 10px;
`;

const CardLink = styled.a`
  display: inline-block;
  font-size: 15px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;
  margin-bottom: 20px;

  &:hover {
    color: #777;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
