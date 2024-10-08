import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-8 py-8 relative flex flex-col gap-4 items-center justify-center">
      <div className="absolute top-0 w-16 h-1 rounded-full bg-neutral-700" />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-xl font-bold">Haikal.</h1>
        <div className="flex gap-4">
          <a href="home">Home</a>
          <a href="journey">Journey</a>
          <a href="contact">Contact</a>
        </div>
        <div>
          <div className="flex gap-2">
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
      <p className="text-center">
        &copy; Haikal. Site designed by{" "}
        <a
          className="font-bold underline"
          target="_blank"
          href="https://muhammadfathurraiyan.vercel.app/"
        >
          Raiyan.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
