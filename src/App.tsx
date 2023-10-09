import { ThemeProvider } from 'styled-components';

// assets
import { Reset, GlobalStyle, Theme } from 'styles';

// project import
import Router from 'shared/Router';

const App = () => (
  <ThemeProvider theme={Theme}>
    <Reset />
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;
