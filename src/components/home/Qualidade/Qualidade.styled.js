import styled from "styled-components"
import media from "styled-media-query"

import QualidadeImage from "./QualidadeImage"

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding-top: 40px;

  ${media.lessThan("800px")`
    padding-top: 10px;
  `}
`

export const Container = styled.div`
  display: flex;
  margin: 0 12.5% 0 0;
  padding-top: 70px;
  flex-direction: row;

  /**alterações do laurim */
  width: 100%;
  height: 70vh;
  /********************** */

  ${media.lessThan("large")`
    margin: 0 7.5% 0 0;
  `}

  ${media.lessThan("800px")`
    flex-direction: column-reverse;
    align-items: center;
    height: 900px;
  `}
`

export const TextContainer = styled.div`
  align-self: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 37.5%;
  /* height: 100%; */
  margin-left: 20px;
  margin-bottom: 50px;

  ${media.lessThan("800px")`
    margin-left: 0;
    width: 85%;
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
  margin-bottom: 50px;

  ${media.lessThan("small")`
    font-size: 14px;
    line-height: 26px;
  `}
`

export const ImageContainer = styled(QualidadeImage)`
  background-position: left bottom;
  background-size: contain;
  width: 100%;
  height: 100%;

  /* ${media.lessThan("800px")`
    width: 100%;
  `} */
`

export const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;

  ${media.lessThan("800px")`
    width: 100%;
  `}/* width: 100%; */
`
