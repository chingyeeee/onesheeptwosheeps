import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/pages/Home"));
const AboutUs = lazy(() => import("./assets/pages/AboutUs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1 className="h-screen">loading...</h1>}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
