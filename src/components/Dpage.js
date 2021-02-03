import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div`
  height: 800px;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Dpage = () => {
  return (
    <Element name="Dpage">
      <Container>
        <Title>Area 'D'</Title>
      </Container>
    </Element>
  );
};

export default Dpage;
