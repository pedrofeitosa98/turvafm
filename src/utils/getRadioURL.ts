type urlType = 'base' | 'data' | 'audio'

const baseURL = 'https://stream2.svrdedicado.org'

const urls: Record<urlType, string> = {
  base: baseURL,
  data: `${baseURL}/cp/get_info.php?p=8202`,
  audio: `${baseURL}/turvafm`,
}

export function getRadioURL(type: urlType) {
  return urls[type]
}
