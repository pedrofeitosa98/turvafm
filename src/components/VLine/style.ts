import { styled, css } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types'

interface IVLineProps {
  $color: 'primary' | 'secondary' | 'gray'
  $height: string
  theme: DefaultTheme
  $flip90?: boolean
}

function colorPalette({
  $color,
  theme,
}: {
  $color: 'primary' | 'secondary' | 'gray'
  theme: DefaultTheme
}) {
  switch ($color) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primaryLighter};
        box-shadow: 1px 0 0 0 ${theme.colors.primaryDarker};
      `
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondaryLighter};
        box-shadow: 1px 0 0 0 ${theme.colors.secondaryDarker};
      `

    case 'gray':
      return css`
        background-color: ${theme.colors.white};
        box-shadow: 1px 0 0 0 ${theme.colors.gray2};
      `
  }
}

export const VLine = styled.div<IVLineProps>`
  width: 1px;
  height: ${({ $height }) => $height || '0px'};
  ${({ $color, theme }: IVLineProps) => colorPalette({ $color, theme })}
`
