import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-8 py-8 relative flex flex-col gap-4 items-center justify-center">
      <div className="absolute top-0 w-16 h-1 rounded-full bg-neutral-700" />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-xl font-bold">Haikal.</h1>
        <div className="flex gap-4">
          <a href="">Home</a>
          <a href="">Journey</a>
          <a href="">Contact</a>
        </div>
        <div>
          <div className="flex gap-2">
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href=""
            >
              <FaInstagram style={{ fontSize: "1rem" }} />
            </a>
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href=""
            >
              <FaTiktok style={{ fontSize: "1rem" }} />
            </a>
            <a
              className="p-2 hover:bg-neutral-700 bg-neutral-900 text-neutral-50 rounded-lg duration-300"
              href=""
            >
              <FaXTwitter style={{ fontSize: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">
        &copy; Haikal. Site designed by{" "}
        <a className="font-bold underline" target="_blank" href="https://muhammadfathurraiyan.site/">
          Raiyan.
        </a>
      </p>
    </footer>
  );
};

export default Footer;