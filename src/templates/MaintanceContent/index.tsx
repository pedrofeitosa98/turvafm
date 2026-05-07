import Player from '@/patterns/Player'
import MaintanceArticle from '@/patterns/MaintanceArticle'
import { MaintanceContentStyle } from './style'
import MaintanceTimeline from '@/patterns/MaintanceTimeline'

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
