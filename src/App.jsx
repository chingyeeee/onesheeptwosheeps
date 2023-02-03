import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/pages/Home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1 className="h-screen">loading...</h1>}>
          <Routes>
            <Route path="/" index element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
