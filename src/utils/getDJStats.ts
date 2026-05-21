export type DJs = 'No DJ' | 'Motivo' | 'homem'

const stats: Record<DJs, { username: string; broadcast: string }> = {
  'No DJ': {
    username: 'turvaFM',
    broadcast: 'Jukebox AutoDJ',
  },
  Motivo: {
    username: 'Motivo',
    broadcast: 'Frequência Máxima',
  },
  homem: {
    username: 'e',
    broadcast: 'Hora E',
  },
}

export const getDJStats = (APIusername: DJs) => {
  return stats[APIusername]
}
