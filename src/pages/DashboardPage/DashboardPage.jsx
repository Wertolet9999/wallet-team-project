import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Section } from './DashboardPage.styled';
import { Container } from 'service/baseStyle';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <Outlet />
        </Section>
      </Container>
    </>
  );
};
