import styled from "styled-components"
import media from "styled-media-query"

import NossoProdutoBackground from "./NossoProdutoBackground"

export const NossoProdutoWrapper = styled(NossoProdutoBackground)`
  background-color: #c9deaf;
  background-position: right top;
  background-size: contain;

  width: 100%;
  height: 100vh;
`

export const NossoProdutoContainer = styled.div`
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
  width: 50%;
  height: 100%;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    width: 50%;
  `}
`

export const Title = styled.h2`
  color: #324031;
  font-family: Knewave;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 42px;
  text-align: left;
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
  width: 374px;

  ${media.lessThan("small")`
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
  `}
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;

  input[name='message'] {
    height: 100px;
  }
`
export const FormTitle = styled.h3`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
  color: #324031;
`
export const Label = styled.label``
Label.Text = styled.span`
  font-family: Montserrat;
  color: #53585d;
  height: 20px;
  position: relative;
  top: -52px;
  left: 16px;

  display: flex;
  align-items: flex-start;

  transform-origin: 0% 0%;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`

export const Input = styled.input`
  box-sizing: border-box;
  background: #f5f5f5;
  color: #53585d;
  height: 50px;
  width: 100%;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-bottom: 2px solid #324031;

  padding: 16px 16px;
  margin-bottom: 5px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: #ff8c25;
  }

  &:focus + span {
    transform: scale(0.7) translateY(1px);
  }
`
