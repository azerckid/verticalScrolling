import styled from "styled-components";

const Container = styled.div`
  height: 800px;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Apage = () => {
  return (
    <Container>
      <Title>Area 'A'</Title>
    </Container>
  );
};

export default Apage;
