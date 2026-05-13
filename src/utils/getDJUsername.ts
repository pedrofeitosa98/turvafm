export type DJs = 'No DJ' | 'Motivo'

const usernames: Record<DJs, string> = {
  'No DJ': 'Jukebox AutoDJ',
  Motivo: 'Frequência Máxima',
}

export const getDJUsername = (username: DJs) => {
  return usernames[username]
}
