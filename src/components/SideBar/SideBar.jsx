import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';

export const SideBar = () => {
  return (
    <div>
      <Navigation />
      <Balance />
      <Currency />
    </div>
  );
};
