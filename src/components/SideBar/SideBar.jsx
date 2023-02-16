import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { useMedia } from 'react-use';
import { Container } from 'stylesheet/baseStyle';
import { Wrap } from './SideBar.styled';

export const SideBar = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      {isMobile ? (
        <>
          <Container>
            <Wrap>
              <Navigation />
            </Wrap>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Wrap>
              <Navigation />
              <Balance />
              <Currency />
            </Wrap>
          </Container>
        </>
      )}
    </>
  );
};
