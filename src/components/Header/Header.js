import React from 'react';

import AuthNav from 'components/AuthNavigation/AuthNavigation';
import Navigation from 'components/Navigation/Navigation';
import useAuth from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/userMenu';
import { Container } from '@chakra-ui/react';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container maxW="1280px" display="flex" alignItems="center">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};

export default Header;
