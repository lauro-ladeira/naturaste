import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

import * as S from "./Footer.styled"

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <S.FooterLogo />
        </S.LogoContainer>
        <S.Social>
          <S.Contato>
            <S.Title>Nos acompanhe nas Redes Sociais</S.Title>
          </S.Contato>
          <S.Icons>
            <S.socialMediaContainer>
              <S.socialMediaLink
                href="https://www.instagram.com/oficial_naturaste"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </S.socialMediaLink>
            </S.socialMediaContainer>
            <S.socialMediaContainer>
              <S.socialMediaLink
                href="https://www.facebook.com/Naturaste-100427631523305"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </S.socialMediaLink>
            </S.socialMediaContainer>
          </S.Icons>
        </S.Social>
        <S.ResponsiveLogoContainer>
          <S.FooterLogo />
        </S.ResponsiveLogoContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Footer
