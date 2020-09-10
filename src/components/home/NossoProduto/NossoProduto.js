import React from "react"
import * as S from "./NossoProduto.styled"

const NossoProduto = () => {
  return (
    <S.NossoProdutoWrapper>
      <S.NossoProdutoContainer>
        <S.TextContainer>
          <S.Title>
            Conheça
            <br />
            Nosso Produto
          </S.Title>
          <S.Text>
            Nosso produto surgiu após um ano de pesquisa e desenvolvimento
            aliando o conhecimento de profissionais de diversas áreas.
            <br />O caldo de cana Naturaste é 100% natural, livre de
            conservantes e com o açúcar natural da cana, mantendo todo o sabor
            que você já conhece.
            <br />
            Experimente e nos mande a sua opinião. Vamos adorar saber a sua
            experiência.
          </S.Text>
        </S.TextContainer>
        <S.FormContainer>
          <S.FormTitle>
            Enviar opinião
          </S.FormTitle>
          <S.Label>
            <S.Input type="text" name="name" />
            <S.Label.Text>Nome</S.Label.Text>
          </S.Label>
          <S.Label>
            <S.Input type="text" name="message"/>
            <S.Label.Text>Mensagem</S.Label.Text>
          </S.Label>
        </S.FormContainer>
      </S.NossoProdutoContainer>
    </S.NossoProdutoWrapper>
  )
}

export default NossoProduto
