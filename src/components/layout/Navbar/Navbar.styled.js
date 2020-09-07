import styled, { css } from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const NavbarWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: 100px;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;

  ${media.greaterThan("990px")`

  ${props =>
    props.scroll > 0 &&
    props.scroll < 200 &&
    css`
      background-color: rgba(50, 64, 49, ${props.scroll * (1 / 400)});
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      height: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      background-color: rgba(50, 64, 49, 1);
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      height: 60px;
    `}
  `}
`
export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 75%;
  z-index: 1;

  ${media.lessThan("large")`
    width: 85%;
  `}
`
export const LogoContainer = styled.div`
  width: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MenuContainer = styled.ul`
  ${media.lessThan("990px")`
    align-items: center;
    background-color: #324031;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    justify-content: space-around;
    left: 100%;
    position: fixed;
    top: 80px;
    transition: left 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    
    width: 100%;
    z-index: 99;

    ${props =>
      props.active === "activeMenu" &&
      css`
        left: 0;
      `}
  `}
`

export const MenuItem = styled.li`
  display: inline-block;

  ${media.lessThan("990px")`
    display: block;
    width: 90%;
  `}
`

export const MenuLink = styled(Link)`
  color: #ff8c25;
  font-family: "Baloo", sans-serif;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;

  &:active,
  &:hover {
    color: #7eae46;
  }

  ${media.lessThan("990px")`
    display: block;
    color: #ff8c25;
    border-bottom: 1px solid #7eae46;
    font-size: 20px;
    padding: 10% 20px;
  `}
`

export const Burger = styled.div`
  display: none;
  margin: 26px;
  cursor: pointer;

  ${media.lessThan("990px")`
    display: block;
    z-index: 99;
  `}
`

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #ff8c25;
  transition: all 0.3s ease;

  ${props =>
    props.active === "activeLine1" &&
    css`
      transform: rotate(-45deg) translate(-5px, 6px);
    `}

  ${props =>
    props.active === "activeLine2" &&
    css`
      opacity: 0;
    `}

  ${props =>
    props.active === "activeLine3" &&
    css`
      transform: rotate(45deg) translate(-5px, -6px);
    `}
`
