import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="../images/logo.svg" alt="Disney" />
        </Link>
      </Logo>
      <NavMenu>
        <a href="/">
          <img src="../images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="../images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="../images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="../images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <img src="../images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="../images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        <Link to="/Login"><span>Sign Out</span></Link>
      </SignOut>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.div`
  img {
    width: 80px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 20px;
  flex:1;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const SignOut = styled(NavMenu)`
  flex: none;
  text-transform: uppercase;
`