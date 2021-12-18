import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BMIDogForm,
  BMICatForm,
  Navigation,
  BMIModal,
  Banner,
} from "./components";
import { BMIProvider } from "./state/provider";

function App() {
  return (
    <BMIProvider>
      <BrowserRouter>
        <Banner />
        <Navigation />
        <Routes>
          <Route path="/" element={<BMIDogForm />} />
          <Route path="/cat" element={<BMICatForm />} />
        </Routes>
        <BMIModal />
      </BrowserRouter>
    </BMIProvider>
  );
}

export default App;
