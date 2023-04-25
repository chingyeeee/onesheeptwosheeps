import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { IntroProvider } from "./context/useIntro";
import DownloadAndShare from "./components/Download";
import { ToggleProvider } from "./context/useToggle";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const DreamCard = lazy(() => import("./pages/DreamCard"));

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <IntroProvider>
            <ToggleProvider>
              <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='dreamcard' element={<DreamCard />} />
                <Route path='download' element={<DownloadAndShare />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </ToggleProvider>
          </IntroProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
