import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Globalstyle';
import { Theme } from './styles/theme';
import Reset from './styles/Reset';
import Router from './routes/Router';

const  App:React.FC = () => {

  const theme = {...Theme}

  return (
    <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
       <Router/>
    </ThemeProvider>
  )
}

export default App
