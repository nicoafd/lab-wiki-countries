import logo from './logo.svg';
import './App.css';
import CountriesList from './Components/CountriesList';
import Navbar from './Components/Navbar';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import CountryDetails from './Components/CountryDetails';


function App() {
  return (
    <div>
    <Navbar/>

    <CountriesList />

    <Switch>
    <Route path="/country/:cca3" render={(routeProps) => <CountryDetails {...routeProps}/>} />
    </Switch>
    </div>
  );
}

export default App;
