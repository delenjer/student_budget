import './App.scss';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Registration} from './components/Registration/Registration';
import {Dashboard} from './components/Dashboard/Dashboard';
import {Reporting} from './components/Reporting/Reporting';
import {About} from './components/About/About';
import {PageRouters} from './routers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PageRouters.Login} element={<Registration />} />
        <Route index path={PageRouters.Home} element={<Home />} />
        <Route path={PageRouters.Reporting} element={<Reporting />} />
        <Route path={PageRouters.Dashboard} element={<Dashboard />} />
        <Route path={PageRouters.About} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
