import Apage from "./components/Apage";
import Bpage from "./components/Bpage";
import Cpage from "./components/Cpage";
import Dpage from "./components/Dpage";

import { Element } from "react-scroll";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Element name="Apage">
        <Apage></Apage>
      </Element>
      <Element name="Bpage">
        <Bpage></Bpage>
      </Element>
      <Element name="Cpage">
        <Cpage></Cpage>
      </Element>
      <Element name="Dpage">
        <Dpage></Dpage>
      </Element>
    </div>
  );
}

export default App;
