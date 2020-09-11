import styled from "styled-components"
import media from "styled-media-query"

import NossoProdutoBackground from "./NossoProdutoBackground"

export const Wrapper = styled.div`
  background-color: #c9deaf;
  width: 100%;
`
export const NossoProdutoWrapper = styled(NossoProdutoBackground)`
  background-color: #c9deaf;
  background-position: right top;
  background-size: contain;

  width: 100%;
  height: 100vh;

  ${media.lessThan("800px")`
    height: 100%;
  `}
`

export const NossoProdutoContainer = styled.div`
  display: flex;
  margin: 0 12.5%;
  padding-top: 70px;

  ${media.lessThan("large")`
    margin: 0 7.5%;
  `}

  ${media.lessThan("800px")`
    flex-direction: column;
  `}
`

export const TextContainer = styled.div`
  align-self: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 100%;
  margin-bottom: 80px;

  ${media.lessThan("800px")`
   align-self: center;
   width: 100%;
   margin-bottom: 40px;
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

  ${media.lessThan("1024px")`
    margin-top: 30%;
  `}

  ${media.lessThan("800px")`
    font-size: 34px;
    line-height: 34px;
    margin-top: 30%;
    width: 100%;
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

  ${media.lessThan("920px")`
    width: 90%;
  `}

  ${media.lessThan("800px")`
   text-align: justify;
   width: 100%;
  `}

  ${media.lessThan("small")`
    font-size: 14px;
    line-height: 26px;
  `}
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;

  ${media.lessThan("800px")`
   width: 100%;
  `}
`
export const FormTitle = styled.h3`
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
  color: #324031;
  margin-bottom: 10px;
`
export const Label = styled.label``
Label.Text = styled.span`
  font-family: Montserrat;
  color: #53585d;
  height: 20px;
  position: relative;
  top: -48px;
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
  border-bottom: 3px solid #7eae46;

  padding: 16px 16px;

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
export const TextArea = styled.textarea`
  box-sizing: border-box;
  background: #f5f5f5;
  color: #53585d;
  height: 120px;
  width: 100%;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-bottom: 3px solid #7eae46;

  padding: 16px 16px;

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${media.lessThan("medium")`
    /* justify-content: flex-start;
    padding: 30px 0; */
  `}
  ${media.lessThan("630px")`
    display: block;
  `}
`

export const Button = styled.button`
  box-sizing: border-box;
  padding: 5px 56px;

  background: #324031;
  border-radius: 10px;
  border: none;
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 30px;

  text-align: center;

  color: #7eae46;
  text-decoration: none;

  white-space: nowrap;

  transition: background 0.3s, color 0.3s;

  &.active,
  &:hover {
    background: #ff8c25;
    color: #324031;
  }

  ${media.lessThan("630px")`
    width: 100%;
  `}
`
