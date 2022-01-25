
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePageComponent from './pages/homePage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePageComponent} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
      <HomePageComponent />
    </div>
  );
}

export default App;
