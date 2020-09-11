import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 40px;
`

export const Container = styled.div`
  display: flex;
  margin: 0 12.5%;
  padding-top: 70px;

  ${media.lessThan("large")`
    margin: 0 7.5%;
  `}
`

export const TextContainer = styled.div`
  align-self: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  /* height: 100%; */
  margin-bottom: 25px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const Title = styled.h2`
  color: #324031;
  font-family: Knewave;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 42px;
  text-align: right;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    font-size: 34px;
    line-height: 34px;
  `}

  ${media.lessThan("small")`
   font-size: 24px;
   line-height: 24px;
  `}
`

export const Text = styled.p`
  color: #000000;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: justify;

  ${media.lessThan("small")`
    font-size: 14px;
    line-height: 26px;
  `}
`

export const ImageContainer = styled.div`
  /* width: 30%; */
  /* background: red; */
`
