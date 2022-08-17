import styled from 'styled-components';
import DrumKit from './components/projects/drumKit';
import BackgroundImage from "../src/utils/images/gig.jpg";

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <h3>JavaScrypt 30 Dashboard</h3>
      </AppHeader>
      <Grid>
        <Item>
          <DrumKit />
        </Item>
        <Item>Content2</Item>
        <Item>Content3</Item>
      </Grid>
      
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  max-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 150px;
  grid-gap: 5px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;

export default App;
