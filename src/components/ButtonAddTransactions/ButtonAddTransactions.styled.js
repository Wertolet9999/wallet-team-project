import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Icon = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #fff;
  transition: all 0.3s ease-in-out;
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
`;
