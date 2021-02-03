import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div`
  height: 800px;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Cpage = () => {
  return (
    <Element name="Cpage">
      <Container>
        <Title>Area 'C'</Title>
      </Container>
    </Element>
  );
};

export default Cpage;
