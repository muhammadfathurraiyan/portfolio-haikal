import Home from "./elements/Home";
import Navbar from "./elements/Navbar";
import Socmed from "./elements/Socmed";
import History from "./elements/History";

const App = () => {
  return (
    <>
      <Navbar />
      <Socmed />
      <main>
        <Home />
        <History />
      </main>
    </>
  );
};

export default App;
