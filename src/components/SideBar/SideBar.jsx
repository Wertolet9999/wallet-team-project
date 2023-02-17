import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { useMedia } from 'react-use';
import { Container } from 'stylesheet/baseStyle';
import { FlexWrap, Wrap } from './SideBar.styled';

export const SideBar = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isMac = useMedia('(min-width: 1280px)');

  return (
    <>
      {isMobile && (
        <>
          <Container>
            <Wrap>
              <Navigation />
            </Wrap>
          </Container>
        </>
      )}
      {isTablet && (
        <>
          <FlexWrap>
            <Navigation />
            <Currency />
          </FlexWrap>
          <Balance />
        </>
      )}
      {isMac && (
        <>
          <FlexWrap>
            <Navigation />
            <Balance />
            <Currency />
          </FlexWrap>
        </>
      )}
    </>
  );
};
