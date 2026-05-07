import { useContext } from 'react'
import { StreamContext } from '@/context/Stream'
import './style.css'

export default function PlayerDJ() {
  const { streamInfos, loadingPlayerData } = useContext(StreamContext)

  const avatarurl =
    streamInfos.djusername === 'No DJ'
      ? '/images/avatar-autodj.png'
      : streamInfos.djprofile

  return (
    <div
      id="player-dj"
      // loadingPlayerData={loadingPlayerData}
    >
      <div className="avatar-container"></div>
      <div
        className={`avatar-img ${loadingPlayerData ? 'avatar-img_loading' : ''}`}
        style={
          {
            '--avatar-url': `url(${avatarurl})`,
          } as React.CSSProperties
        }
      ></div>
    </div>
  )
}
