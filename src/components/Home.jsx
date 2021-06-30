import React from "react";
import HomeIn from "./HomeIn";
import HomeOut from "./HomeOut";

function Home(props) {
  if (props.isLoggedIn) {
    return <HomeIn />;
  } else {
    return <HomeOut />;
  }
}

export default Home;