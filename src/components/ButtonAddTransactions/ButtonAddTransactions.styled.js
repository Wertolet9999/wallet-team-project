import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Icon = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #fff;
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 2px solid #24cca7;
  right: 40px;
  bottom: 40px;
  width: 44px;
  height: 44px;
  background: #24cca7;

  @media (max-width: 1279px) {
    position: sticky;
    left: 100vw;
    bottom: 20px;

    /* position: absolute;
    width: 44px;
    height: 44px;
    left: 684px;
    top: 940px; */
  }

  @media (min-width: 1280px) {
    position: absolute;
    width: 44px;
    height: 44px;
    left: 1196px;
    top: 636px;
  }
`;
