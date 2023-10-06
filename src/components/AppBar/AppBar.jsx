import { Navigation } from '../Navigation/Navigation';

import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import { UserMenu } from 'components/UserMenu/userMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
