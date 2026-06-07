import { styled } from 'styled-components'
import { ContentBox } from '#/components/ContentBox/style'

export const MaintanceArticleStyle = styled(ContentBox)`
  width: 100%;

  & .content-wrapper {
    display: flex;
    gap: 20px;
  }

  & .image-content {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 105px;
    aspect-ratio: 2/1;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background: url('/images/article-welcome-image.png') no-repeat center;
    background-position: -50px -215px;
  }

  @media (max-width: 580px) {
    width: inherit;

    & .text-container {
      height: auto;
      gap: 10px;
    }

    & .image-content {
      display: none;
    }
  }
`
