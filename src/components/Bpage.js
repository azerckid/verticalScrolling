import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div`
  height: 800px;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Bpage = () => {
  return (
    <Element name="Bpage">
      <Container>
        <Title>Area 'B'</Title>
      </Container>
    </Element>
  );
};

export default Bpage;
