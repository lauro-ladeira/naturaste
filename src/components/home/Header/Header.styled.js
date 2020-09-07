import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import HeaderBackground from "./HeaderBackground"
import HeaderImage from "./HeaderImage"

export const HeaderWrapper = styled(HeaderBackground)`
  background-color: #324031;
  background-position: right bottom;
  background-size: 733px;

  width: 100%;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 75%;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
   flex-direction: column;
   padding-top: 30vh;
  `}
`

export const ImageWrapper = styled(HeaderImage)`
  background-position: left bottom;
  background-size: 350px;
  width: 100%;
  height: 100vh;
`

export const TitleContainer = styled.div`
  align-self: right;
  width: 100%;
  height: 100%;
  padding-top: 40vh;

  ${media.lessThan("large")`
    width: 85%;
  `}
  ${media.lessThan("medium")`
    width: 100%;
  `}
  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 30px 10px 0;

  ${media.lessThan("medium")`
    justify-content: flex-start;
    padding: 30px 0;
  `}
  ${media.lessThan("630px")`
    justify-content: center;
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

  ${media.lessThan("910px")`
    font-size: 42px;
    line-height: 50px;
  `}

  ${media.lessThan("630px")`
    display:block;
  `}

  ${media.lessThan("388px")`
    font-size: 32px;
    line-height: 45px;
  `}
`

export const Button = styled(Link)`
  padding: 10px 56px;

  display: block;
  background: #f6ab00;
  border-radius: 10px;
  border: none;
  color: #060761;

  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;

  white-space: nowrap;
`
