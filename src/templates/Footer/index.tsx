import { FooterStyle } from './style'
import { VLine } from '@/components/VLine/style'
import { FaCode, FaPaintbrush } from 'react-icons/fa6'

export default function Footer() {
  return (
    <FooterStyle>
      <div className="fansite-stamp">
        <img
          src="/images/fsstamp.png"
          alt="Selo de fã-site da Turva"
          width={123}
          height={64}
          draggable="false"
        />
      </div>
      <VLine $color="gray" $height="60px" />
      <div className="footer-text">
        <div>
          <strong>© 2026 turvaFM </strong>
          <p>é um fã-site da </p>
          <a href="http://turva.com.br/" target="_blank" rel="noopener">
            Pousada Turva
          </a>
          <p> e não possui envolvimento com a Sulake Oy.</p>
        </div>
        <div>
          <p>Algumas imagens utilizadas são de propriedades da Sulake Oy.</p>
        </div>
        <div className="developers">
          <p>
            <FaCode /> <strong>Motivo</strong> (Pedro Feitosa)
          </p>
          <p>|</p>
          <p>
            <FaPaintbrush /> <strong>Diael</strong> (Diogo Allemonge).
          </p>
        </div>
      </div>
    </FooterStyle>
  )
}
