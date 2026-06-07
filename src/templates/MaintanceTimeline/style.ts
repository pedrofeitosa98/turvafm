import { ContentBox } from '#/components/ContentBox/style'
import { styled } from 'styled-components'

export const MaintanceTimelineStyle = styled(ContentBox)`
  width: 350px;
  height: 313px;

  & ul {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  & ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  & a {
    font-size: ${({ theme }) => theme.fontSize.px12};
    color: ${({ theme }) => theme.colors.white};
    width: fit-content;
    padding: 3px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.tiny};
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondaryLighter};
  }

  & .discord-link {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  & .discord-link:hover {
    background-color: ${({ theme }) => theme.colors.tertiaryLighter};
  }

  /* h3 {
    margin-bottom: 20px;
  } */

  @media (max-width: 1366px) {
    height: 313px;
  }

  @media (max-width: 940px) {
    width: 580px;
    height: fit-content;
  }

  @media (max-width: 580px) {
    display: none;
  }
`
