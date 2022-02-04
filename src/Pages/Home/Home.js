import React, { useState } from "react";
import { useEffect } from "react";

import Slider from "./Slider";
import MenuList from "./Menu";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Card from "./Card";
import Radio from "./Radio";
import Event from "./Events";
import Links from "./Links";
// import MenuList from "./MenuData";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section>
        <Slider />
        <Links />
        <MenuList />
        <div>
          <Radio />
          <Card />
        </div>
      </section>

      <Event />
    </>
  );
};

export default App;
