import { styled } from 'styled-components'

export const MaintanceTimelineStyle = styled.article`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;

  width: 350px;
  height: 371.5px;
  border: 4px solid ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 20px;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.px14};

  background: ${({ theme }) => theme.colors.gray4};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};

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
