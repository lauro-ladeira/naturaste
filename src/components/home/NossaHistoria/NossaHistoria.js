import React from "react"
import * as S from "./NossaHistoria.styled"

const NossaHistoria = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextContainer>
          <S.Title>Nossa História</S.Title>
          <S.Text>
            Em janeiro de 2019 iniciamos nossa jornada com as pesquisas para o
            desenvolvimento do nosso primeiro produto, contando com o apoio e
            conhecimento de diversos profissionais. Entre erros e acertos,
            análises sensoriais e muitos estudos, definimos nossa fórmula e o
            produto tomou forma em novembro de 2019. Durante seis meses
            planejamos e montamos nossa fábrica na cidade de Teixeiras, interior
            de Minas Gerais.<br />
            <br />
            Como empresa, a Naturaste busca atuar com responsabilidade
            socioambiental e valorizar pequenos produtores, nossos fornecedores
            de matéria-prima são pequenos produtores rurais regionais
            comprometidos com práticas ambientais.<br />
            <br />
            Inovação e tecnologia fazem parte da nossa rotina de trabalho, assim
            como trabalho em equipe, dedicação e profissionalismo. Acreditamos
            que o sucesso de uma empresa é conquistado diariamente com muito
            trabalho, parceria e respeito. Atualmente nosso time de
            colaboradores está totalmente comprometido em desenvolver nossa
            marca para que possamos, em breve, distribuir nosso produto para
            todo o país e levar esse gostinho brasileiro para dentro da casa de
            mais e mais pessoas.
          </S.Text>
        </S.TextContainer>
        <S.CardsContainer>
          <S.Card>
            <S.CardTitleContainer>
              <S.CardTitle>Visão</S.CardTitle>
            </S.CardTitleContainer>
            <S.Description>
              Favorecer o cenário de inovações tecnológicas no segmento de
              alimentos e bebidas atendendo as necessidades do mercado, gerando
              emprego e renda aliado com o desenvolvimento sustentável
            </S.Description>
          </S.Card>
          <S.Card>
            <S.CardTitleContainer>
              <S.CardTitle>Missão</S.CardTitle>
            </S.CardTitleContainer>
            <S.Description>
              Se destacar em pesquisa e desenvolvimento de produtos inovadores e
              naturais com a mas alta qualidade e segurança alimentar.
            </S.Description>
          </S.Card>
          <S.Card>
            <S.CardTitleContainer>
              <S.CardTitle>Valores</S.CardTitle>
            </S.CardTitleContainer>
            <S.Description type="list">
              • Valorizar a cultura da alimentação saudável; <br />
              • Valorizar pequenos produtores rurais; <br />
              • Alta qualidade dos produtos; <br />
              • Empreendedorismo, inovação e tecnologia; <br />• Ética e
              responsabilidade socioambiental;
            </S.Description>
          </S.Card>
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default NossaHistoria
