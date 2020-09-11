import React, { useState, useEffect } from "react"
import * as S from "./Navbar.styled"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
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
        <S.MenuContainer active={active ? "activeMenu" : null} scroll={scroll}>
          <S.MenuItem>
            <S.AnchorLinkkk to="/#inicio">
              {/* <S.MenuLink activeClassName="active">Início</S.MenuLink> */}
              Início
            </S.AnchorLinkkk>
          </S.MenuItem>
          <S.MenuItem>
            <S.AnchorLinkkk to="/#produto">
              {/* <S.MenuLink activeClassName="active">Nosso produto</S.MenuLink> */}
              Nosso produto
            </S.AnchorLinkkk>
          </S.MenuItem>
          <S.MenuItem>
            <S.AnchorLinkkk to="/#historia">
              {/* <S.MenuLink activeClassName="active">Nossa história</S.MenuLink> */}
              Nossa história
            </S.AnchorLinkkk>
          </S.MenuItem>
          <S.MenuItem>
            <S.AnchorLinkkk to="/#qualidade">
              {/* <S.MenuLink activeClassName="active">
                Qualidade e Higiene
              </S.MenuLink> */}
              Qualidade e Higiene
            </S.AnchorLinkkk>
          </S.MenuItem>
          <S.MenuItem>
            <S.AnchorLinkkk to="/#contato">
              {/* <S.MenuLink activeClassName="active" border="none">
                Contato
              </S.MenuLink> */}
              Contato
            </S.AnchorLinkkk>
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
