import Apage from "./components/Apage";
import Bpage from "./components/Bpage";
import Cpage from "./components/Cpage";
import Dpage from "./components/Dpage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Apage></Apage>
      <Bpage></Bpage>
      <Cpage></Cpage>
      <Dpage></Dpage>
    </div>
  );
}

export default App;
