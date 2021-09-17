import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCard from "./components/TouristInfoCards";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Footer
        infoArray={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
