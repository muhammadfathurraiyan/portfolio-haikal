import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Foto from "../assets/foto9.jpg";
import Image from "./Image";

const Home = () => {
  return (
    <div className="min-h-screen py-8 gap-8 flex max-sm:flex-col items-center justify-evenly">
      <div className="w-2/5 max-sm:w-full">
        <h1 className="text-5xl max-sm:text-4xl uppercase ">
          Muhammad <br />
          <span className="font-bold">Haikal Al Fata</span>
        </h1>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-[2px] w-16 rounded-full bg-neutral-600" />
          <p className="text-xl font- italic">RX King Enthusiast</p>
        </div>
        <p>
          Passionate about the iconic Yamaha RX King motorcycle known for its
          power and style. I am intersested to its performance, history, and
          the culture surrounding this classic bike, which has a strong fanbase.
        </p>
        <div>
          <div className="flex gap-2 mt-2">
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href="https://instagram.com/teeukuuhaikal_22/"
              target="_blank"
            >
              <FaInstagram style={{ fontSize: "1rem" }} />
            </a>
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href="https://www.tiktok.com/@m.haikal.al.fata?_t=8h5ug0HFIyW&_r=1"
              target="_blank"
            >
              <FaTiktok style={{ fontSize: "1rem" }} />
            </a>
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href="https://instagram.com/teeukuuhaikal_22/"
              target="_blank"
            >
              <FaXTwitter style={{ fontSize: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-sm:-order-1">
        <Image
          className="w-[350px] shadow-lg max-sm:w-[250px] rounded-lg"
          src={Foto}
          alt="my pic"
        />
      </div>
    </div>
  );
};

export default Home;
