export type DJs =
  | 'No DJ'
  | 'Motivo'
  | 'homem'
  | 'Ericless'
  | 'bevelyrios'
  | 'Ideo'

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
  Ericless: {
    username: 'Ericles',
    broadcast: 'TurvaMIX',
  },
  bevelyrios: {
    username: 'bev',
    broadcast: 'CLUBEV',
  },
  Ideo: {
    username: 'Ideobisium',
    broadcast: 'Conexões Latinas',
  },
}

export const getDJStats = (APIusername: DJs) => {
  return stats[APIusername]
}
