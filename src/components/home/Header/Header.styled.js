import styled from "styled-components"
import media from "styled-media-query"

import HeaderBackground from "./HeaderBackground"
import HeaderImage from "./HeaderImage"
import LogoImage from "./LogoImage"

export const HeaderWrapper = styled(HeaderBackground)`
  background-color: #324031;
  background-position: right bottom;
  background-size: contain;

  width: 100%;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0;
  margin-right: 12.5%;

  ${media.lessThan("large")`
    margin-right: 7.5%;
  `}
`

export const ImageWrapper = styled(HeaderImage)`
  position: absolute;
  background-position: left bottom;
  background-size: contain;
  width: 50%;
  height: 85vh;
  margin-top: 15vh;
  max-width: 290px;

  ${media.lessThan("890px")`
    height: 80vh;
    margin-top: 20vh;
  `}

  ${media.lessThan("medium")`
    max-height: 70vh;
    margin-top: 30vh;
  `}
`

export const TitleContainer = styled.div`
  align-self: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    width: 50%;
  `}
`

export const Title = styled.h1`
  color: #324031;
  font-family: Knewave;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 75px;
  text-align: right;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    position: absolute;
    font-size: 40px;
    line-height: 68px;
    bottom: 20%;
    z-index: 1;
  `}

  ${media.lessThan("640px")`
   font-size: 34px;
   line-height: 47px;
  `}

  ${media.lessThan("620px")`
    color: #7EAE46;
    bottom: 55%;
  `}

  ${media.lessThan("small")`
   font-size: 24px;
   line-height: 37px;
  `}
`
export const ImageLogo = styled(LogoImage)`
  background-position: right bottom;
  background-size: contain;
  width: 220px;
  height: 80px;

  ${media.lessThan("640px")`
    width: 180px;
    height: 60px;
  `}

  ${media.lessThan("small")`
    width: 150px;
    height: 40px;
  `}
`
