import styled from "styled-components"
import media from "styled-media-query"

import Logo from "../Logo"

export const Wrapper = styled.div`
  width: 100%;
  /* height: auto; */
  background-color: #324031;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 12.5%;
  padding: 50px 0;

  ${media.lessThan("large")`
    margin: 0 7.5%;
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const Contato = styled.div`
  width: 300px;
  height: 150px;
`

export const Title = styled.h1`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  text-align: right;

  color: #ff8c25;

  ${media.lessThan("medium")`
    text-align: center;
    font-size: 24px;
    line-height: 38px;
  `}
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 227px;
  height: 150px;

  ${media.lessThan("medium")`
    align-items: center;
  `}
`

export const LogoContainer = styled.div`
  ${media.lessThan("medium")`
      display: none;
  `}
`

export const ResponsiveLogoContainer = styled.div`
  display: none;
  ${media.lessThan("medium")`
      display: block;
  `}
`

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 77%;
  margin-bottom: 23px;

  ${media.lessThan("medium")`
    justify-content: center;
  `}
`

export const socialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 10px;
  width: 40px;
  height: 40px;
`

export const socialMediaLink = styled.a`
  display: inline-block;
  color: #7eae46;
`

export const FooterLogo = styled(Logo)`
  /* width: 250px; */
`
