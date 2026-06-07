export type DJs =
  | 'No DJ'
  | 'Motivo'
  | 'homem'
  | 'Ericless'
  | 'bevelyrios'
  | 'Ideo'
  | 'zurr'
  | 'guir'
  | 'NOOB'

const stats: Record<DJs, { username: string; broadcast: string }> = {
  'No DJ': {
    username: 'TurvaFM',
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
  zurr: {
    username: 'zu',
    broadcast: 'zu na pompom',
  },
  guir: {
    username: 'gui',
    broadcast: 'guinada turva',
  },
  NOOB: {
    username: 'NOOB',
    broadcast: 'Sonorização',
  },
}

export const getDJStats = (APIusername: DJs) => {
  return stats[APIusername]
}
