import { MaintanceTimelineStyle } from './style'

export default function MaintanceTimeline() {
  return (
    <MaintanceTimelineStyle>
      <h3>Quadro de avisos</h3>
      <div>
        <p className="text-extra-bold">Códigos ativos:</p>
        <ul>
          <li>pousada - 50c</li>
          <li>albergue - 50c</li>
          <li>nappa - 50c</li>
          <li>1969 - 50c</li>
          <li>6 - 50c</li>
        </ul>
      </div>
      <span>Em breve mais novidades!</span>
    </MaintanceTimelineStyle>
  )
}
