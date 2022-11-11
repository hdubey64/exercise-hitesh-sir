import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ConstactSection";
import Header from "./Header";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";

const App = () => {
   return (
      <div>
         <h1 style={{ textAlign: "center " }}>Exercise-0.2 by Hitesh Sir</h1>
         <NavBar />
         <Header />
         <PortfolioSection />
         <AboutSection />
         <ContactSection />
      </div>
   );
};

export default App;
