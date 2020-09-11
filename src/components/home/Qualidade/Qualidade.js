import React from "react"
import * as S from "./Qualidade.styled"

const Qualidade = () => {
  return (
    <S.Wrapper id="qualidade">
      <S.Container>
        <S.ImageContainer></S.ImageContainer>
        <S.TextContainer>
          <S.Title>Qualidade e Higiene</S.Title>
          <S.Text>
            Nosso objetivo é levar pra dentro da sua casa um produto com o mais
            alto padrão de qualidade e higiene, seguindo todas as diretrizes dos
            órgãos fiscalizadores.
            <br />
            Nossa matéria-prima é selecionada rigorosamente para que o produto
            chegue até você, consumidor, com a mais alta qualidade. Diversas
            análises são realizadas durante e após o processo com o objetivo de
            sempre manter nosso padrão de higiene e qualidade.
            <br />
            Os colaboradores são supervisionados e treinados para que todas as
            regras de higiene sejam seguidas.
            <br />
            Com isso podemos garantir que o produto que você irá adquirir será
            sempre o melhor.
          </S.Text>
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Qualidade
