import { styled } from 'styled-components'

export const MaintanceTimelineStyle = styled.article`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;

  width: 350px;
  height: 351.5px;
  border: 4px solid ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 20px;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.px14};

  background: ${({ theme }) => theme.colors.gray4};

  & .title {
    font-size: ${({ theme }) => theme.fontSize.px18};
    font-weight: 700;
  }

  & ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  & a {
    text-decoration: underline;
  }

  & .discord-link {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  & .discord-link:hover {
    color: ${({ theme }) => theme.colors.tertiaryLighter};
  }

  /* h3 {
    margin-bottom: 20px;
  } */

  @media (max-width: 1366px) {
    height: 311.5px;
  }

  @media (max-width: 940px) {
    width: 100%;

    & > *:last-child {
      display: block;
    }

    & > *:first-child {
      display: none;
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`
