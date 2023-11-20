import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import testPage from "./pages/testPage";
import typePage from "./pages/typePage";
import Result from "./components/ResultComponent";
import { CounterProvider } from './hooks/useCounter';

function App() {
  return (
    <div className="App">
      <Switch>
        <CounterProvider>
        
        <Route path="/type" exact component={typePage} />
        <Route path="/result" exact render={(props) => (
            <Result {...props} />
        )} />
        <Route path="/" exact component={testPage} />
        <Redirect to="/" />
        </CounterProvider>
      </Switch>
    </div>
  );
}

export default App;
