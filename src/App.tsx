import Contact from "./elements/Contact";
import Footer from "./elements/Footer";
import Home from "./elements/Home";
import Journey from "./elements/Journey";
import Navbar from "./elements/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Socmed /> */}
      <main>
        <section
          id="home"
          className="absolute left-14 px-8 flex flex-col gap-8"
        >
          <Home />
          <Journey />
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
