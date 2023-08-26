import styled from "styled-components";
import Physics from "./components/Physics/Physics";
import Mentors from "./components/Mentorss/Mentor";
import Biology from "./components/Biologyss/Biology";
function App() {
  return (
    <Container>
      <Mentors />
      <Biology />
      <Physics />
    </Container>
  );
}

export default App;
const Container = styled.div``;