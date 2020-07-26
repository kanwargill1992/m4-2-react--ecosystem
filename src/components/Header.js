import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Wrapper1 = styled.div`
  margin-top: 25px;
  text-decoration: none;
  display: flex;
`;

const Wrapper2 = styled.div`
  margin-left: 40px;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Fruit Emporium</h1>
      <Wrapper1>
        <Wrapper2>
          <NavLink to="/" activeClassName="selected">
            Home
          </NavLink>
        </Wrapper2>

        <Wrapper2>
          <NavLink to="/about" activeClassName="selected1">
            About
          </NavLink>
        </Wrapper2>
      </Wrapper1>
    </Wrapper>
  );
};

export default Header;
