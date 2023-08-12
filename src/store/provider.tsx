'use client';

import { Provider } from 'react-redux';
import React, { ReactNode } from 'react';
import store from './store';

const ReduxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
