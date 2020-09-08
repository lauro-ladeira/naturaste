import styled from "styled-components"
import media from "styled-media-query"

import HeaderBackground from "./HeaderBackground"
import HeaderImage from "./HeaderImage"
import LogoImage from "./LogoImage"

export const HeaderWrapper = styled(HeaderBackground)`
  background-color: #324031;
  background-position: right bottom;
  background-size: 733px;

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
  background-position: left bottom;
  background-size: 300px;
  width: 100%;
  height: 100vh;

  ${media.lessThan("990px")`
    background-size: 100px;
    width: 100%;
    height: 100vh;
  `}
`

export const TitleContainer = styled.div`
  align-self: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`

export const Title = styled.h1`
  color: #324031; 
  font-family: Knewave;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 75px;
  text-align: right;
`
export const ImageLogo = styled(LogoImage)`
  background-position: right bottom;
  background-size: 200px;
  width: 100%;
  height: 80px;
`
