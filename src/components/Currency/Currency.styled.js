import styled from '@emotion/styled';
import background from '../../img/currency/currency.svg';

export const Wrapper = styled.div`
    height: 174px;
    width: 280px;
margin: 0 auto;
    border-radius: 30px;
    background-color: #6e78e8;
    color: #ffffff;

 @media (min-width: 380px) and (max-width: 767px) {
        height: 182px;
        min-width: 336px;

    }

     @media (min-width: 768px)  {
        height: 182px;
        min-width: 336px;
        margin: 0;
    }

    @media (min-width: 1280px) {
        height: 331px;
        width: 393px;
    }
`;

export const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 11px 17px 12px 20px;
    justify-content: space-between;
    list-style: none;

    font-family: 'Circe', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;

    @media (min-width: 768px) {
        padding: 11px 25px 12px 20px;
    }
    @media (min-width: 1280px) {
        padding: 17px 54px 16px 44px;
    }
`;
export const Table = styled.div`
height: 124px;
    border-radius: 0 0 30px 30px;
    background-color: #4a56e2;
    min-height: 93px;
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    font-family: 'Circe', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    @media (min-width: 380px) {
        min-height: 132px;
    }

    @media (min-width: 1280px) {
        height: 271px;
    }
`;

export const CurrencyList = styled.ul`
    margin: 0;
    padding: 12px 20px 12px 20px;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li:not(:last-child) {
        padding-bottom: 12px;
    }

    @media (min-width: 768px) {
        padding: 16px 20px 12px 20px;
    }

    @media (min-width: 1280px) {
        padding: 20px 58px 24px 48px;
    }
`;

export const CurrencyItem = styled.li`
    display: flex;
    justify-content: space-between;
`;

export const HeaderTitle = styled.li`
    width: 60px;
    text-align: center;

    @media (min-width: 1280px) {
        width: 70px;
    }
`;

export const SpanDescr = styled.span`
    width: 60px;
    text-align: center;

    @media (min-width: 1280px) {
        width: 70px;
    }
`;