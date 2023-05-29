import styled from 'styled-components';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Home/>
    </>
  ); 
}
const Main =styled.div`
  text-align: center;
`
const WrongText = styled.span`
  text-decoration: line-through;
  color: red;
`
export default App;
