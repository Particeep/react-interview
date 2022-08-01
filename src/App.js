import { AppHeader, AppWrapper, Title } from './Styled';

import Movie from './ui/vues/Movie';

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <Title>Particeep React-Interview</Title>
      </AppHeader>
      <Movie />
      <Title>Nicolas LOUIS</Title>
    </AppWrapper>
  );
}

export default App;
