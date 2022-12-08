import Main from './views/Main';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';

const theme = {
  colors: {
    hover: "grey"
  },
  border: {
    normal: "none",
  },
  text: {
    hover: "0px 0px 10px blue"
  }
}

function App() {
  return (
    <ThemeProvider theme = { theme }>
      <>
        <GlobalStyles />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
