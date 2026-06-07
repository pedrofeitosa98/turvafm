import { MaintanceTimelineStyle } from './style'
import { ContentBoxBody, ContentBoxTitle } from '#/components/ContentBox/style'
import { FaDiscord, FaGamepad } from 'react-icons/fa'

export default function MaintanceTimeline() {
  return (
    <MaintanceTimelineStyle>
      <ContentBoxTitle $titleColor="gray3">
        <FaGamepad />
        Como jogar Turva?
      </ContentBoxTitle>
      <ContentBoxBody>
        <p>
          Faça o download de um navegador compatível com Flash ou Shockwave.
          Abaixo você encontra opções seguras e recomendadas, baixe e aproveite!
        </p>
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
        <a
          className="discord-link"
          href="https://discord.gg/mmr4MmnR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
          Entre no Discord »
        </a>
      </ContentBoxBody>
    </MaintanceTimelineStyle>
  )
}
