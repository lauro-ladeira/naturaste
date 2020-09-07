import React from "react"
import * as S from "./Header.styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.ImageWrapper />
        <S.TitleContainer>
          <S.Title>
            100% natural,
            <br />
            100% saudável,
            <br />
            100% saboroso!
          </S.Title>
        </S.TitleContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
