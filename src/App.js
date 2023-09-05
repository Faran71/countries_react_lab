import logo from './logo.svg';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import VisitedCountries from './containers/VisitedCountries';

function App() {
  return (
    <>

      <div className="App">
        <CountriesContainer />
        {/* <CountriesContainer /> */}
      </div>
    </>
  );
}

export default App;
