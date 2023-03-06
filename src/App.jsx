import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./assets/components/Loading";

const Home = lazy(() => import("./assets/pages/Home"));
const AboutUs = lazy(() => import("./assets/pages/AboutUs"));
const DreamCard = lazy(() => import("./assets/pages/DreamCard"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/dreamcard" element={<DreamCard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
