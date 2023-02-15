import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Section } from './Layout.styled';
import { Container } from 'stylesheet/baseStyle';

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
