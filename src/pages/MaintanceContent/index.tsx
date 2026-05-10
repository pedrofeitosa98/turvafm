import { MaintanceContentStyle } from './style'
import Player from '@/templates/Player'
import MaintanceArticle from '@/templates/MaintanceArticle'
import MaintanceTimeline from '@/templates/MaintanceTimeline'

export default function MaintanceContent() {
  return (
    <MaintanceContentStyle>
      <div>
        <section className="left-coulumn">
          <Player />
          <MaintanceArticle />
        </section>
        <MaintanceTimeline />
      </div>
    </MaintanceContentStyle>
  )
}
