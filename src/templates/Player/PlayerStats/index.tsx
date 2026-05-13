import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'
import { PlayerStatsStyle } from './style'
import { getDJUsername } from '@/utils/getDJUsername'

export default function PlayerStats() {
  const { streamInfos, loadingPlayerData, updateRadioData } =
    useContext(StreamContext)

  const djusername =
    streamInfos.djusername === 'No DJ' ? 'turvaFM' : streamInfos.djusername

  return (
    <PlayerStatsStyle $loadingPlayerData={loadingPlayerData}>
      <div className="stats">
        <p className="dj">
          Você está ouvindo{' '}
          <span onClick={updateRadioData}>
            {loadingPlayerData ? '...' : djusername}
          </span>
        </p>
        <p className="show">
          Com a programação{' '}
          <span onClick={updateRadioData}>
            {loadingPlayerData ? '...' : getDJUsername(streamInfos.djusername)}
          </span>
        </p>
      </div>
      <button type="button" className="listeners" onClick={updateRadioData}>
        {loadingPlayerData ? '...' : streamInfos.listeners}
      </button>
    </PlayerStatsStyle>
  )
}
