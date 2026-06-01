import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'
import { PlayerStatsStyle } from './style'
import { getDJStats } from '#/utils/getDJStats'
import { FaUser, FaMicrophone, FaMusic } from 'react-icons/fa'

export default function PlayerStats() {
  const { streamInfos, loadingPlayerData, updateRadioData } =
    useContext(StreamContext)

  // const djusername = streamInfos.djusername === 'No DJ' ? 'turvaFM' : streamInfos.djuserna
  const djStats = getDJStats(streamInfos.djusername)
  const musicStats = streamInfos.title

  return (
    <PlayerStatsStyle $loadingPlayerData={loadingPlayerData}>
      <div className="stats">
        <div className="top">
          <div className="stats-div dj">
            <FaUser />
            <span onClick={updateRadioData}>
              {loadingPlayerData ? '...' : djStats.username}
            </span>
          </div>
          <div className="stats-div broadcast">
            <FaMicrophone />
            <span onClick={updateRadioData}>
              {loadingPlayerData ? '...' : djStats.broadcast}
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="stats-div music">
            <FaMusic />
            <div className="text-slide">
              <div className="text-slide-space">
                <span onClick={updateRadioData}>
                  {loadingPlayerData ? '...' : musicStats}
                </span>
              </div>
              <div className="text-slide-title">
                <span onClick={updateRadioData}>
                  {loadingPlayerData ? '...' : musicStats}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="listeners" onClick={updateRadioData}>
        {loadingPlayerData ? '...' : streamInfos.listeners}
      </button>
    </PlayerStatsStyle>
  )
}
