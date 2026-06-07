import { styled } from 'styled-components'
import { VLine } from '@/components/VLine/style'

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: ${({ theme }) => theme.colors.background};

  .fansite-stamp {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 143px;
    height: 104px;
    padding: 20px 10px;

    background-color: ${({ theme }) => theme.colors.gray2};

    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.innerGray};
  }

  .footer-text {
    display: flex;
    flex-direction: column;

    font-size: ${({ theme }) => theme.fontSize.px12};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray3};

    & > div * {
      display: inline;
    }

    & svg {
      width: 12px;
      height: 12px;
      margin-left: 2px;
      padding-top: 2px;
      fill: ${({ theme }) => theme.colors.primaryDarker};
    }

    & > div:last-child > p:first-child svg {
      fill: ${({ theme }) => theme.colors.tertiaryDarker};
    }

    .developers {
      display: flex;
      gap: 4px;

      > p {
        display: flex;
        align-items: flex-start;
        gap: 4px;
      }

      svg {
        margin: 2px 0 0 0;
      }
    }
  }

  @media (max-width: 1366px) {
    padding: 10px;

    .fansite-stamp {
      height: 94px;
    }
  }

  @media (max-width: 580px) {
    .fansite-stamp {
      display: none;
    }

    ${VLine} {
      display: none;
    }

    & .footer-text > div:nth-child(2) {
      display: none;
    }

    & .footer-text > div:last-child > p {
      display: block;
    }
  }
`
