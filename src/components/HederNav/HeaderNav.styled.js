import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (min-width: 768px) {
    gap: 12px;
  }

  li:first-child {
    @media (min-width: 768px) {
      padding-right: 12px;
      border-right: 1px solid rgba(189, 189, 189, 1);
    }
  }
`;
export const SpanDead = styled('span')`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;
`;
export const LogOutButton = styled('button')`
  display: flex;
  gap: 8px;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: #bdbdbd;
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  transition: all 0.3s;
  svg {
    color: #bdbdbd;
    font-size: 24px;
  }

  &:hover {
    & svg {
      transform: scale(1.2);
    }
    transform: scale(1.2);
  }
`;
