import { useContext } from 'react'
import { PlayerActionsStyle } from './style'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { StreamContext } from '@/context/Stream'

export default function PlayerActions() {
  const { toggleAudio } = useContext(StreamContext)

  return (
    <PlayerActionsStyle>
      {/* <button
        title="pause"
        type="button"
        className="pause"
        onClick={() => toggleAudio('pause')}
      >
        <FaPause />
      </button>
      <button
        title="play"
        type="button"
        className="play"
        onClick={() => toggleAudio('play')}
      >
        <FaPlay />
      </button> */}
      <button
        title="pause"
        type="button"
        className="pause"
        onClick={() => toggleAudio('decrease')}
      >
        <FaMinus />
      </button>
      <button
        title="play"
        type="button"
        className="play"
        onClick={() => toggleAudio('increase')}
      >
        <FaPlus />
      </button>
    </PlayerActionsStyle>
  )
}
