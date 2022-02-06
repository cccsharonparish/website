import React from "react";

import Slider from "./Slider";
import MenuList from "./Menu";

import Card from "./Card";
import Radio from "./Radio";
import Event from "./Events";
import Links from "./Links";

const App = () => {
  return (
    <>
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
