import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { App } from './app';
import { customTheme } from './theme';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={customTheme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
