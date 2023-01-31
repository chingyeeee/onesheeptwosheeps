import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/components/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1 className="h-screen">loading...</h1>}>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
