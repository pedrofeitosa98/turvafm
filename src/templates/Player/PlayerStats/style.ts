import { styled, css } from 'styled-components'

export const PlayerStatsStyle = styled.div<{ $loadingPlayerData: boolean }>`
  display: flex;
  gap: 10px;
  flex-grow: 1;

  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    height: 56px;

    .top {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      gap: 4px;
      width: 100%;
    }

    .stats-div {
      display: flex;
      align-items: center;

      gap: 6px;
      font-size: ${({ theme }) => theme.fontSize.px10};

      height: 26px;
      padding: 0px 10px;
      border-radius: ${({ theme }) => theme.borderRadius.tiny};
      box-shadow: ${({ theme }) => theme.shadows.innerPrimary};
      background: ${({ theme }) => theme.colors.primaryDarker};

      transition: ${({ theme }) => theme.transition};

      svg {
        width: 12px;
        height: 12px;
      }
    }

    .dj {
      width: 40%;
    }

    .broadcast {
      width: 60%;
    }

    .music {
      width: 100%;
      /* overflow-x: hidden; */

      .text-slide {
        /* position: relative; */
        width: 283px;
        height: 18px;
        overflow: hidden;

        display: flex;

        span {
          font-weight: 400;
        }

        > div {
          min-width: 100%;
          /* white-space: nowrap; */
          display: flex;
          flex-direction: row;
          flex: 0 0 auto;
          animation-name: rightToLeft;
          animation-duration: 6s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes rightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      }
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.px12};
      font-weight: 700;
      cursor: pointer;
    }
  }

  .listeners {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;

    background: ${({ theme }) => theme.colors.primaryDarker};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.shadows.innerPrimary};

    font-size: ${({ theme }) => theme.fontSize.px28};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);

    transition: ${({ theme }) => theme.transition};
  }

  ${({ $loadingPlayerData }) =>
    $loadingPlayerData
      ? css`
          span,
          button {
            opacity: 0.5;
            pointer-events: none;
          }
        `
      : css`
          span,
          button {
            opacity: 1;
            pointer-events: inherit;
          }
        `}

  @media (max-width: 580px) {
    flex-direction: column;
    flex-grow: 0;
    width: 100%;

    .stats {
      flex-grow: 0;
      width: 100%;
      gap: 10px;

      .dj,
      .broadcast {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0px;
      }

      .broadcast {
        padding-left: 0px;
      }
    }

    .listeners {
      width: 100%;
    }
  }
`
