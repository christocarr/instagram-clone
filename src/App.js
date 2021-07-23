import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, User } from 'pages';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:username" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
