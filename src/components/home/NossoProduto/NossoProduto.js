import React from "react"
import * as S from "./NossoProduto.styled"

const NossoProduto = () => {
  return (
    <S.Wrapper id="produto">
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
            <S.FormTitle>Enviar opinião</S.FormTitle>
            <S.Label>
              <S.Input type="text" name="name" />
              <S.Label.Text>Nome</S.Label.Text>
            </S.Label>
            <S.Label>
              <S.TextArea type="text" name="message" />
              <S.Label.Text
                style={{
                  top: "-118px",
                }}
              >
                Mensagem
              </S.Label.Text>
            </S.Label>
            <S.ButtonContainer>
              <S.Button target="_blank">Enviar</S.Button>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.NossoProdutoContainer>
      </S.NossoProdutoWrapper>
    </S.Wrapper>
  )
}

export default NossoProduto
