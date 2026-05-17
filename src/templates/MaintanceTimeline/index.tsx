import { MaintanceTimelineStyle } from './style'

export default function MaintanceTimeline() {
  return (
    <MaintanceTimelineStyle>
      <h2 className="title">Como jogar Turva?</h2>
      <p>
        Faça o download de um navegador compatível com Flash ou Shockwave.
        Abaixo você encontra opções seguras e recomendadas, baixe e aproveite!
      </p>
      <div>
        <ul>
          <li>
            <p className="text-extra-bold">Basilisk (flash + shockwave):</p>
            <span>
              <a
                href="https://www.mediafire.com/file/7gg3cqeo3rvt21m/Basilisk-Portable.zip/file"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer download »
              </a>
            </span>
          </li>
          <li>
            <p className="text-extra-bold">Palemoon (shock + flash):</p>
            <span>
              <a
                href="https://www.mediafire.com/file/g9kd8xt3c0m5kew/palemoon_32bit_with_flash_player_and_shockwave_player.rar/file"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer download »
              </a>
            </span>
          </li>
        </ul>
      </div>
      <a
        className="discord-link"
        href="https://discord.gg/mmr4MmnR"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entre no Discord »
      </a>
    </MaintanceTimelineStyle>
  )
}
