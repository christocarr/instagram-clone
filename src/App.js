import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

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
          <Route exact path="/" render={(props) => <Home photos={photos} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
