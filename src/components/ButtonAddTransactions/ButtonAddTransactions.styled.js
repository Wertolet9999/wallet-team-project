import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Icon = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #fff;
`;

export const StyledBtn = styled.button`
 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background: #24cca7;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    @media (min-width: 768px) {

        margin-bottom: 40px;
        right: 40px;
    }
    @media (min-width: 1280px) {
        position: absolute;
        top: 70vh;
        right: 24px;
    }
`;
