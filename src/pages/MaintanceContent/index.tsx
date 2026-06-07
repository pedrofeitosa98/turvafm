import { MaintanceContentStyle } from './style'
import Player from '@/templates/Player'
import MaintanceArticle from '@/templates/MaintanceArticle'
import MaintanceTimeline from '@/templates/MaintanceTimeline'
import { ContentBox, ContentBoxTitle } from '#/components/ContentBox/style'
import { FaInfo } from 'react-icons/fa'

export default function MaintanceContent() {
  return (
    <MaintanceContentStyle>
      <div>
        <section className="left-coulumn">
          <Player />
          <MaintanceArticle />
          <ContentBox>
            <ContentBoxTitle $titleColor="secondary">
              <FaInfo />
              Estamos preparando tudo para o lançamento da nossa v1!
            </ContentBoxTitle>
          </ContentBox>
        </section>
        <MaintanceTimeline />
      </div>
    </MaintanceContentStyle>
  )
}
