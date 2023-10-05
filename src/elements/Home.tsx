import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Foto from "../assets/foto.png"

const Home = () => {
  return (
    <section className="absolute left-14 px-8 h-screen flex max-sm:flex-col items-center justify-evenly">
      <div className="w-2/5 max-sm:w-full">
        <h1 className="text-4xl font-bold font-['Playfair_Display']">
          Muhammad Haikal Al Fata
        </h1>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-[2px] w-16 bg-neutral-50" />
          <p className="text-xl italic">Audio Enginer</p>
        </div>
        <p>
          A talented audio engineer with a passion for creativity and
          technology. Delivering unforgettable listening experiences through
          precision acoustics and dynamic collaboration.
        </p>
        <div>
          <div className="flex gap-2 mt-2">
            <a className="p-2 bg-fuchsia-950 rounded-lg hover:text-neutral-950 duration-200" href="">
              <FaInstagram style={{ fontSize: "1.5rem" }} />
            </a>
            <a className="p-2 bg-fuchsia-950 rounded-lg hover:text-neutral-950 duration-200" href="">
              <FaTiktok style={{ fontSize: "1.5rem" }} />
            </a>
            <a className="p-2 bg-fuchsia-950 rounded-lg hover:text-neutral-950 duration-200" href="">
              <FaXTwitter style={{ fontSize: "1.5rem" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-sm:-order-1">
        <img className="w-[350px] max-sm:w-[250px]" src={Foto} alt="" />
      </div>
    </section>
  );
};

export default Home;
