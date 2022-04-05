import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from './GlobalStyle';
import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';
import Search from './components/Search';
import { lightTheme } from './theme';
import UserInfo from './components/UserInfo';
import UserProfile from './components/UserProfile';
import { useQuery } from "react-query";
import { fetchUser } from "./api";

const Container = styled.div`
  background-color: ${(props)=>props.theme.bgColor};
`

const Wrap = styled.div`
  width: 95vw;
  max-width: 1170px;
  margin: auto;
`

function App() {
  const { data } = useQuery("gitUser", fetchUser);
  console.log(data);

  return (
      <ThemeProvider theme={lightTheme}>
        <Container>
          <Reset/>
          <GlobalStyle/>
          <Wrap>
            <Search/>
            <UserInfo/>
            <UserProfile/>
          </Wrap>
        </Container>
        <ReactQueryDevtools initialIsOpen={false}/>
      </ThemeProvider>  
  );
}

export default App;
