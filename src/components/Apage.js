import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div`
  height: 800px;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Apage = () => {
  return (
    <Element name="Apage">
      <Container>
        <Title>Area 'A'</Title>
      </Container>
    </Element>
  );
};

export default Apage;
