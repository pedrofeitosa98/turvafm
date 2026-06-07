import { ContentBoxBody, ContentBoxTitle } from '#/components/ContentBox/style'
import { FaUserFriends } from 'react-icons/fa'
import { MaintanceArticleStyle } from './style'

export default function MaintanceArticle() {
  return (
    <MaintanceArticleStyle>
      <ContentBoxTitle $titleColor="primary">
        <FaUserFriends />
        Quem somos nós?
      </ContentBoxTitle>
      <ContentBoxBody>
        <div className="content-wrapper">
          <p>
            TurvaFM é a primeira web rádio da Pousada Turva! Nosso foco será
            procurar proporcionar diversão através de programações diversas e
            interações diretas com vocês jogadores e ouvintes, além de - é claro
            - muita música!
          </p>
          <div className="image-content" />
        </div>
      </ContentBoxBody>
    </MaintanceArticleStyle>
  )
}
