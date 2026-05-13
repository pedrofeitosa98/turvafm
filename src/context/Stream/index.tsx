import { useState, createContext, useEffect } from 'react'
import type {
  IStreamContext,
  IStreamInfos,
  IStreamProviderProps,
} from './types'
import { getRadioURL } from '@/utils/getRadioURL'

export const StreamContext = createContext<IStreamContext>({} as IStreamContext)

export function StreamProvider({ children }: IStreamProviderProps) {
  const [loadingPlayerData, setLoadingPlayerData] = useState(true)
  const [streamInfos, setStreamInfos] = useState<IStreamInfos>({
    art: 'capa da musica',
    bitrate: '128',
    djprofile: '/images/avatar-autodj.png',
    djusername: 'No DJ',
    history: ['musica 1', 'musica 2', 'musica 3', 'etc'],
    title: 'musica atual',
    listeners: 'ouvintes',
    ulistener: 'ouvintes unicos',
  })
  const [playerRef, setPlayerRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!playerRef) {
      const player = document.querySelector('audio')
      setPlayerRef(player)
    }
  }, [streamInfos])

  function toggleAudio(action: 'play' | 'pause') {
    if (playerRef) {
      if (action === 'play') {
        if (playerRef.paused) {
          playerRef.play()
        } else {
          playerRef.volume = 1.0
        }
      } else {
        playerRef.volume = 0.0
      }
    }
  }

  const getRadioData = async () => {
    try {
      const response = await fetch(getRadioURL('data'))

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()

      setStreamInfos(data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    } finally {
      setLoadingPlayerData(false)
    }
  }

  const updateRadioData = async () => {
    try {
      setLoadingPlayerData(true)
      const response = await fetch(getRadioURL('data'))

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()

      setStreamInfos(data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    } finally {
      setLoadingPlayerData(false)
    }
  }

  useEffect(() => {
    getRadioData()

    const interval = setInterval(() => getRadioData(), 10 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <StreamContext.Provider
      value={{
        streamInfos,
        toggleAudio,
        loadingPlayerData,
        updateRadioData,
      }}
    >
      {children}
    </StreamContext.Provider>
  )
}
