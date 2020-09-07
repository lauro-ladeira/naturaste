import React, { useState, useEffect } from "react"
import * as S from "./Navbar.styled"
import Logo from "../Logo"


const Navbar = () => {
  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(0)


  useEffect(() => {
    window.onscroll = () => {
      handleScroll()
    }
  }, [])

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 0) {
      setScroll(document.documentElement.scrollTop)
    } else {
      setScroll(0)
    }
  }

  const toggleClassName = () => {
    const currentState = active
    setActive(!currentState)
  }

  return (
    <S.NavbarWrapper scroll={scroll}>
      <S.NavbarContainer>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.MenuContainer active={active ? 'activeMenu' : null}>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Início</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Nosso produto</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Nossa história</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Qualidade e Higiene</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/" activeClassName="active">Contato</S.MenuLink>
          </S.MenuItem>
        </S.MenuContainer>
        <S.Burger onClick={toggleClassName}>
          <S.BurgerLine active={active ? "activeLine1" : null}></S.BurgerLine>
          <S.BurgerLine active={active ? "activeLine2" : null}></S.BurgerLine>
          <S.BurgerLine active={active ? "activeLine3" : null}></S.BurgerLine>
        </S.Burger>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  )
}

export default Navbar
