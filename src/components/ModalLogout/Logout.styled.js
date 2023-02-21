import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99;
`;

export const Container = styled.div`
 
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
        @media (max-width: 767px) {
      display: flex;
        flex-direction: column;
        gap: 15px;
    }
    @media (min-width: 768px) {
        top: 50%;
        transform: translate(-50%, -50%);
        width: 540px;
        height: 308px;
        padding: 40px;
        box-shadow: none;
    }
`;



export const ButtonWrapper = styled.div`
      display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;;
        margin: 0 auto;
      
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-evenly;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
`;