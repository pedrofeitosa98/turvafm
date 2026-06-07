import { styled } from 'styled-components'

/* 
Toda ContentBox precisa obrigatoriamente conter um ContentBoxTitle e um ContentBoxBody.

A ContentBox foi criada diretamente como um styled-components e não como um componente React
para poder ter seu estilo editável e a inclusão de ícones ou outros recursos nos títulos.
*/

export interface IContentBoxProps {
  $titleColor:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'red'
    | 'blue'
    | 'teal'
    | 'green'
    | 'green2'
    | 'magenta'
    | 'purple'
    | 'orange'
    | 'gold1'
    | 'gold2'
    | 'silver1'
    | 'silver2'
    | 'bronze1'
    | 'bronze2'
    | 'gray3'
    | 'gray4'
}

export const ContentBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  padding: 6px;

  font-size: ${({ theme }) => theme.fontSize.px14};
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

export const ContentBoxTitle = styled.h2<{
  $titleColor: IContentBoxProps['$titleColor']
}>`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 4px 8px;

  font-size: ${({ theme }) => theme.fontSize.px16};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray4};
  text-shadow: 0 1px 0 white;

  border-radius: ${({ theme }) => theme.borderRadius.tiny};
  background-color: ${({ theme }) => theme.colors.background};
  border-left: solid 4px
    ${({ theme, $titleColor }) => theme.colors[$titleColor]};
`

export const ContentBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  padding: 0 6px 6px;
`
