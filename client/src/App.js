import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
} from "./components/SplitPane";
import QuoteContext from "./components/QuoteContext";
import "./App.css";
import { Container, Navbar } from 'react-bootstrap';


function App() {
  

  return (
    <>

      <Navbar bg='dark' expand='lg' variant='light'>
        <Container>
            <Navbar.Brand>ALACHUA TRAFFIC SAFETY DASHBOARD</Navbar.Brand>
        </Container>
      </Navbar>

    <div className="App">
      <QuoteContext.Provider>
        <SplitPane className="split-pane-row">
          <SplitPaneLeft>
          </SplitPaneLeft>
          <Divider className="separator-col" />
          <SplitPaneRight>
          </SplitPaneRight>
        </SplitPane>
      </QuoteContext.Provider>
    </div>
    </>
          
  );
}

export default App;
