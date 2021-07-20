import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      setPhotos(response.data);
    } catch (err) {
      console.error(err);
    }
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
