import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UpcomingAdventures from "./pages/UpcomingAdventures";
import DesignYourAdventure from "./pages/DesignYourAdventure";
import PastAdventures from "./pages/PastAdventures";
import CoachingSupport from "./pages/CoachingSupport";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-primary dark:bg-primary dark:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming-adventures" element={<UpcomingAdventures />} />
            <Route path="/design-your-adventure" element={<DesignYourAdventure />} />
            <Route path="/past-adventures" element={<PastAdventures />} />
            <Route path="/coaching-support" element={<CoachingSupport />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
