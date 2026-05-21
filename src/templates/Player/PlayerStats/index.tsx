import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'
import { PlayerStatsStyle } from './style'
import { getDJStats } from '#/utils/getDJStats'

export default function PlayerStats() {
  const { streamInfos, loadingPlayerData, updateRadioData } =
    useContext(StreamContext)

  // const djusername = streamInfos.djusername === 'No DJ' ? 'turvaFM' : streamInfos.djuserna
  const djStats = getDJStats(streamInfos.djusername)

  return (
    <PlayerStatsStyle $loadingPlayerData={loadingPlayerData}>
      <div className="stats">
        <p className="dj">
          Você está ouvindo{' '}
          <span onClick={updateRadioData}>
            {loadingPlayerData ? '...' : djStats.username}
          </span>
        </p>
        <p className="show">
          Com a programação{' '}
          <span onClick={updateRadioData}>
            {loadingPlayerData ? '...' : djStats.broadcast}
          </span>
        </p>
      </div>
      <button type="button" className="listeners" onClick={updateRadioData}>
        {loadingPlayerData ? '...' : streamInfos.listeners}
      </button>
    </PlayerStatsStyle>
  )
}
