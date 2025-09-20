import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from 'react';
import "./index.css";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import { AnimatePresence } from 'framer-motion';

// Lazy load routes
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
import Portfolio from "./Pages/Portfolio";
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"));
const NotFoundPage = lazy(() => import("./Pages/404"));
const Personal = lazy(() => import("./Pages/Personal"));
const FriendsGallery = lazy(() => import("./Pages/FriendsGallery"));
const MomentsGallery = lazy(() => import("./Pages/MomentsGallery"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  BaroroLou™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            BarLou™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="/personal" element={
          <Suspense fallback={<div className="min-h-screen bg-[#030014] flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-purple-500 rounded-full animate-spin"></div>
          </div>}>
            <Personal />
          </Suspense>
        } />
        <Route path="/friends" element={
          <Suspense fallback={<div className="min-h-screen bg-[#030014] flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-purple-500 rounded-full animate-spin"></div>
          </div>}>
            <FriendsGallery />
          </Suspense>
        } />
        <Route path="/moments" element={
          <Suspense fallback={<div className="min-h-screen bg-[#030014] flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-purple-500 rounded-full animate-spin"></div>
          </div>}>
            <MomentsGallery />
          </Suspense>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;