/* eslint-disable prettier/prettier */
import React from 'react';
import UsersList from 'components/organism/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import {theme} from 'assets/styles/theme'
import { Wrapper } from 'views/Root.style';

const Root = () => (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
    <Wrapper>
      <UsersList title="Users List" />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
