import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  background-color: #ff8c25;
  width: 100%;
  /*sem height por enquanto */
  padding-bottom: 40px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12.5%;
  padding-top: 70px;

  ${media.lessThan("large")`
    margin: 0 7.5%;
  `}
`

export const TextContainer = styled.div`
  /* align-self: left; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  /* height: 100%; */
  margin-bottom: 40px;

  /* ${media.lessThan("medium")`
    width: 50%;
  `} */
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
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* width: 374px; */

  ${media.lessThan("medium")`
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.lessThan("600px")`
    flex-direction: column;
    align-items: center;
  `}
`

export const Card = styled.div`
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center;   */
  background: #fff;
  width: 31%;
  /* height: 305px; */
  border-radius: 20px;
  ${media.lessThan("600px")`
    width: 92.5%;
    margin: 20px 0;
  `}
`

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
  height: 72px;
  background: #324031;
  border-radius: 0px 0px 20px 20px;
`

export const CardTitle = styled.h2`
  /* margin: auto; */
  font-family: Baloo;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
`

export const Description = styled.p`
  width: 85%;
  margin: 20px auto; 
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: ${props => (props.type === "list" ? 'none' : 'justify')};

  color: #324031;
`
