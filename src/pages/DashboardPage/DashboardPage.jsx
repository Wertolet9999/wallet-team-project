import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Section, WrapperDiv } from './DashboardPage.styled';
import { Container } from 'service/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <WrapperDiv>
            <SideBar />
            <Outlet />
          </WrapperDiv>
        </Container>
      </Section>
    </>
  );
};
