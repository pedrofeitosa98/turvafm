type urlType = 'base' | 'data' | 'audio'

const baseURL = 'https://sonic1.transmissaodigital.com'

const urls: Record<urlType, string> = {
  base: baseURL,
  data: `${baseURL}/cp/get_info.php?p=8034`,
  audio: `${baseURL}/8034/stream`,
}

export function getRadioURL(type: urlType) {
  return urls[type]
}
