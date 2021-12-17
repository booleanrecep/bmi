import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { BmiForm, BmiNavbar , BmiProgressBar} from './components';

function App() {
  return (
    <div className="bmi">
      <BrowserRouter>
        <BmiNavbar/>
        <Routes>
            <Route index  element={<BmiForm/>} />
        </Routes>
        <BmiProgressBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
