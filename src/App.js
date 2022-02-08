import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./Pages/Home/Home";
import ConnectList from "./Pages/Connect/Connect";
import Contact from "./Pages/Contact/Contact";
import Give from "./Pages/Give/Give";
import Media from "./Pages/Media/Media";
import New from "./Pages/New/New";
import Resources from "./Pages/Resources/Resources";
import Footer from "./Pages/Home/footer";
import Happen from "./Pages/Happen/Happen";
import Join from "./Pages/Join/Join";
import Error from "./Pages/Error/Error";
import Live from "./Pages/Live//Live";
import ScrollToTop from "./Pages/ScrollToTop";

//navbar
import Navbar from "./Pages/Home/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<New />} />

          <Route path="/connect" element={<ConnectList />} />
          <Route path="/happening" element={<Happen />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/give" element={<Give />} />
          <Route path="/join" element={<Join />} />
          <Route path="/live" element={<Live />} />

          <Route path="/media" element={<Media />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
