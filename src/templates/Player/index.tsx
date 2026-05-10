import { PlayerStyle } from './style'
import { VLine } from '@/components/VLine/style'
import PlayerDJ from '@/templates/Player/PlayerDJ'
import PlayerStats from '@/templates/Player/PlayerStats'
import PlayerActions from '@/templates/Player/PlayerActions'

export default function Player() {
  return (
    <PlayerStyle>
      <audio id="true_player" controls autoPlay preload="none">
        <source
          src="https://sonic1.transmissaodigital.com/8034/stream"
          type="audio/mpeg"
        />
      </audio>

      <PlayerDJ />
      <VLine $color="primary" $height="50px" />
      <PlayerStats />
      <VLine $color="primary" $height="50px" />
      <PlayerActions />
    </PlayerStyle>
  )
}
