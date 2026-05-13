import { styled } from 'styled-components'
import { VLine } from '@/components/VLine/style'
import { PlayerDJStyle } from '@/templates/Player/PlayerDJ/style'

export const PlayerStyle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 10px;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 4px solid ${({ theme }) => theme.colors.primaryLighter};
  background: ${({ theme }) => theme.colors.primary};

  #true_player {
    display: none;
  }

  @media (max-width: 580px) {
    flex-direction: column;

    width: 90vw;

    ${VLine},
    ${PlayerDJStyle} {
      display: none;
    }
  }
`
