import styled from "styled-components";
import { Link } from "react-scroll";

const ListBox = styled.div`
  display: flex;
  position: fixed;
  top: 0;
`;

const List = styled.div`
  margin-right: 100px;
`;

const Navigation = () => {
  return (
    <ListBox>
      <Link to="Apage" smooth={true}>
        <List>To A</List>
      </Link>
      <Link to="Bpage" smooth={true}>
        <List>To B</List>
      </Link>
      <Link to="Cpage" smooth={true}>
        <List>To C</List>
      </Link>
      <Link to="Dpage" smooth={true}>
        <List>To D</List>
      </Link>
    </ListBox>
  );
};

export default Navigation;
