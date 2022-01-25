
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePageComponent from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePageComponent} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
