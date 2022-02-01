
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePageComponent from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePageComponent} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
