import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

interface IItem {
  current: boolean;
}

const AHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li<IItem>`
  height: 50px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid
    ${(props) => (props?.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)``;

export const Header = withRouter(({ location: { pathname } }) => {
  return (
    <AHeader>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Movie</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </AHeader>
  );
});
