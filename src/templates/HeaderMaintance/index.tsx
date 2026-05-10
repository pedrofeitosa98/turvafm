import WaveAnimation from '@/components/WaveAnimation'
import { HeaderMaintanceContainer } from './style'

export default function HeaderMaintance() {
  return (
    <HeaderMaintanceContainer>
      <div className="logo-container">
        <img
          src="/images/logo.png"
          alt="Logo turvaFM"
          width={285}
          height={114}
          draggable="false"
        />
      </div>
      <WaveAnimation />
    </HeaderMaintanceContainer>
  )
}
